import type Stripe from 'stripe';
import { env } from '@/config';
import { ConflictError, ForbiddenError, NotFoundError } from '@/errors';
import { prisma } from '@/lib/prisma';
import { stripe } from '@/lib/stripe';

const CURRENCY = 'usd'; // change to your target currency

export const paymentService = {
	/**
	 * FR-4.1 / FR-4.2 — Create a Stripe Checkout Session for a CONFIRMED rental
	 * order and persist a PENDING Payment record. Returns a hosted checkoutUrl
	 * you can open directly in a browser to pay with a Stripe test card.
	 */
	async createPaymentForOrder(customerId: string, rentalOrderId: string) {
		const order = await prisma.rentalOrder.findUnique({
			where: { id: rentalOrderId },
		});

		if (!order) {
			throw new NotFoundError('Rental order not found');
		}
		if (order.customerId !== customerId) {
			throw new ForbiddenError('You do not own this rental order');
		}
		if (order.status !== 'CONFIRMED') {
			throw new ConflictError(
				`Order must be CONFIRMED before payment (current status: ${order.status})`,
			);
		}

		// Stripe expects the smallest currency unit (e.g. cents)
		const amountInCents = Math.round(Number(order.totalAmount) * 100);

		const session = await stripe.checkout.sessions.create({
			mode: 'payment',
			payment_method_types: ['card'],
			line_items: [
				{
					price_data: {
						currency: CURRENCY,
						unit_amount: amountInCents,
						product_data: {
							name: `GearUp Rental Order #${order.id}`,
						},
					},
					quantity: 1,
				},
			],
			metadata: {
				rentalOrderId: order.id,
				customerId,
			},
			success_url: `${env.client_url}/payments/success?session_id={CHECKOUT_SESSION_ID}`,
			cancel_url: `${env.client_url}/payments/cancel?rentalOrderId=${order.id}`,
		});

		const payment = await prisma.payment.create({
			data: {
				transactionId: session.id, // Checkout Session id, e.g. cs_test_...
				rentalOrderId: order.id,
				amount: order.totalAmount,
				currency: CURRENCY,
				method: 'STRIPE',
				status: 'PENDING',
			},
		});

		return {
			payment,
			checkoutUrl: session.url, // <- open this URL in a browser to pay with Stripe's hosted test card page
		};
	},

	/**
	 * FR-4.3 / FR-4.4 / FR-4.5 — Verify the Stripe webhook signature and process
	 * payment_intent.succeeded / payment_intent.payment_failed events.
	 * Idempotent: re-delivered events for an already-processed payment are no-ops.
	 */
	async handleWebhookEvent(rawBody: Buffer, signature: string) {
		if (!env.stripe_webhook_secret) {
			throw new Error('Missing STRIPE_WEBHOOK_SECRET environment variable');
		}

		let event: Stripe.Event;
		try {
			event = stripe.webhooks.constructEvent(
				rawBody,
				signature,
				env.stripe_webhook_secret,
			);
		} catch (err: any) {
			// Signature invalid — reject before touching the database
			throw new Error(`Webhook signature verification failed: ${err.message}`);
		}

		switch (event.type) {
			case 'checkout.session.completed': {
				// Fired as soon as the customer completes payment on the hosted page.
				// payment_status is "paid" for card payments; for delayed methods it
				// may briefly be "unpaid" — in that case wait for checkout.session.async_payment_succeeded.
				const session = event.data.object as Stripe.Checkout.Session;
				if (session.payment_status === 'paid') {
					await this.markPaymentCompleted(session.id);
				}
				break;
			}
			case 'checkout.session.async_payment_succeeded': {
				const session = event.data.object as Stripe.Checkout.Session;
				await this.markPaymentCompleted(session.id);
				break;
			}
			case 'checkout.session.async_payment_failed':
			case 'checkout.session.expired': {
				const session = event.data.object as Stripe.Checkout.Session;
				await this.markPaymentFailed(session.id);
				break;
			}
			default:
				// Ignore other event types we don't act on
				break;
		}

		return { received: true };
	},

	async markPaymentCompleted(transactionId: string) {
		const payment = await prisma.payment.findUnique({
			where: { transactionId },
		});
		if (!payment || payment.status === 'COMPLETED') return; // already processed — idempotent

		await prisma.$transaction([
			prisma.payment.update({
				where: { transactionId },
				data: { status: 'COMPLETED', paidAt: new Date() },
			}),
			prisma.rentalOrder.update({
				where: { id: payment.rentalOrderId },
				data: { status: 'PAID' },
			}),
		]);
	},

	async markPaymentFailed(transactionId: string) {
		const payment = await prisma.payment.findUnique({
			where: { transactionId },
		});
		if (!payment || payment.status === 'COMPLETED') return; // don't downgrade a completed payment

		await prisma.payment.update({
			where: { transactionId },
			data: { status: 'FAILED' },
		});
		// Rental order stays in CONFIRMED so the customer can retry payment (FR-4.5)
	},

	/**
	 * FR-4.6 — Fallback confirmation: re-check status directly with Stripe,
	 * useful right after the customer is redirected back from Checkout.
	 */
	async confirmPayment(customerId: string, transactionId: string) {
		const payment = await prisma.payment.findUnique({
			where: { transactionId },
		});
		if (!payment) {
			throw new NotFoundError('Payment not found');
		}

		const order = await prisma.rentalOrder.findUnique({
			where: { id: payment.rentalOrderId },
		});
		if (!order || order.customerId !== customerId) {
			throw new ForbiddenError('You do not own this payment');
		}

		if (payment.status === 'PENDING') {
			const session = await stripe.checkout.sessions.retrieve(transactionId);
			if (session.payment_status === 'paid') {
				await this.markPaymentCompleted(transactionId);
			} else if (session.status === 'expired') {
				await this.markPaymentFailed(transactionId);
			}
			// If status is still "open"/"unpaid", leave it PENDING — the customer
			// hasn't finished the Checkout flow yet.
		}

		return prisma.payment.findUnique({ where: { transactionId } });
	},

	/** FR-4.7 — authenticated customer's payment history */
	async listPayments(customerId: string, page: number, limit: number) {
		const where = { rentalOrder: { customerId } };

		const [data, total] = await Promise.all([
			prisma.payment.findMany({
				where,
				orderBy: { createdAt: 'desc' },
				skip: (page - 1) * limit,
				take: limit,
			}),
			prisma.payment.count({ where }),
		]);

		return {
			data,
			page,
			limit,
			total,
			totalPages: Math.max(1, Math.ceil(total / limit)),
		};
	},

	/** FR-4.8 — single payment detail, ownership enforced */
	async getPaymentById(customerId: string, id: string) {
		const payment = await prisma.payment.findUnique({
			where: { id },
			include: { rentalOrder: { select: { customerId: true } } },
		});

		if (!payment) {
			throw new NotFoundError('Payment not found');
		}
		if (payment.rentalOrder.customerId !== customerId) {
			throw new ForbiddenError('You do not own this payment');
		}

		const { rentalOrder, ...rest } = payment;
		return rest;
	},
};

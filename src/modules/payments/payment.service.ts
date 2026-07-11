import type Stripe from 'stripe';
import { env } from '@/config';
import { ConflictError, ForbiddenError, NotFoundError } from '@/errors';
import { prisma } from '@/lib/prisma';
import { stripe } from '@/lib/stripe';

const CURRENCY = 'usd';

const createPaymentForOrder = async (customerId: string, rentalOrderId: string) => {
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
			transactionId: session.id,
			rentalOrderId: order.id,
			amount: order.totalAmount,
			currency: CURRENCY,
			method: 'STRIPE',
			status: 'PENDING',
		},
	});

	return {
		payment,
		checkoutUrl: session.url,
	};
};

const handleWebhookEvent = async (rawBody: Buffer, signature: string) => {
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
		throw new Error(`Webhook signature verification failed: ${err.message}`);
	}

	switch (event.type) {
		case 'checkout.session.completed': {
			const session = event.data.object as Stripe.Checkout.Session;
			if (session.payment_status === 'paid') {
				await markPaymentCompleted(session.id);
			}
			break;
		}
		case 'checkout.session.async_payment_succeeded': {
			const session = event.data.object as Stripe.Checkout.Session;
			await markPaymentCompleted(session.id);
			break;
		}
		case 'checkout.session.async_payment_failed':
		case 'checkout.session.expired': {
			const session = event.data.object as Stripe.Checkout.Session;
			await markPaymentFailed(session.id);
			break;
		}
		default:
			break;
	}

	return { received: true };
};

const markPaymentCompleted = async (transactionId: string) => {
	const payment = await prisma.payment.findUnique({
		where: { transactionId },
	});
	if (!payment || payment.status === 'COMPLETED') return;

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
};

const markPaymentFailed = async (transactionId: string) => {
	const payment = await prisma.payment.findUnique({
		where: { transactionId },
	});
	if (!payment || payment.status === 'COMPLETED') return;

	await prisma.payment.update({
		where: { transactionId },
		data: { status: 'FAILED' },
	});
};

const confirmPayment = async (customerId: string, transactionId: string) => {
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
			await markPaymentCompleted(transactionId);
		} else if (session.status === 'expired') {
			await markPaymentFailed(transactionId);
		}
	}

	return prisma.payment.findUnique({ where: { transactionId } });
};

const listPayments = async (customerId: string, page: number, limit: number) => {
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
};

const getPaymentById = async (customerId: string, id: string) => {
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
};

export const paymentService = {
	createPaymentForOrder,
	handleWebhookEvent,
	confirmPayment,
	listPayments,
	getPaymentById,
};

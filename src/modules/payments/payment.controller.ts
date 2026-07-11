import type { NextFunction, Request, Response } from 'express';
import { ForbiddenError } from '@/errors/index.js';
import type { AuthRequest } from '../../middlewares/auth.middleware.js';
import { paymentService } from './payment.service.js';
import {
	validateConfirmPaymentBody,
	validateCreatePaymentBody,
	validatePaymentIdParam,
} from './payment.validation.js';

export const paymentController = {
	// POST /api/payments/create (Customer)
	async create(req: AuthRequest, res: Response, next: NextFunction) {
		try {
			const { rentalOrderId } = validateCreatePaymentBody(req.body);
			const customerId = req.user?.id; // <- from your auth middleware

			if (!customerId || typeof customerId !== 'string') {
				throw new ForbiddenError('You must be an authorized Customer');
			}
			const result = await paymentService.createPaymentForOrder(
				customerId,
				rentalOrderId,
			);
			res.status(201).json({ success: true, data: result });
		} catch (err) {
			next(err);
		}
	},

	// POST /api/payments/confirm (Customer)
	async confirm(req: AuthRequest, res: Response, next: NextFunction) {
		try {
			const { transactionId } = validateConfirmPaymentBody(req.body);
			const customerId = req.user?.id;

			if (!customerId) {
				throw new ForbiddenError('You must be an authorized Customer');
			}

			const payment = await paymentService.confirmPayment(
				customerId,
				transactionId,
			);
			res.status(200).json({ success: true, data: payment });
		} catch (err) {
			next(err);
		}
	},

	// POST /api/payments/webhook (Stripe server-to-server — no auth, raw body required)
	async webhook(req: Request, res: Response, next: NextFunction) {
		try {
			const signature = req.headers['stripe-signature'];
			if (!signature || typeof signature !== 'string') {
				res
					.status(400)
					.json({ success: false, message: 'Missing Stripe-Signature header' });
				return;
			}
			// req.body must be the RAW buffer here — see payment.routes.ts for the raw-body middleware
			const result = await paymentService.handleWebhookEvent(
				req.body as Buffer,
				signature,
			);
			res.status(200).json(result);
		} catch (err: any) {
			// Signature/verification failures return 400 so Stripe doesn't keep retrying forever
			res.status(400).json({ success: false, message: err.message });
		}
	},

	// GET /api/payments (Customer)
	async list(req: AuthRequest, res: Response, next: NextFunction) {
		try {
			const customerId = req.user?.id;
			if (!customerId) {
				throw new ForbiddenError('You must be an authorized Customer');
			}
			const page = Number(req.query.page) > 0 ? Number(req.query.page) : 1;
			const limit =
				Number(req.query.limit) > 0 && Number(req.query.limit) <= 100
					? Number(req.query.limit)
					: 20;
			const result = await paymentService.listPayments(customerId, page, limit);
			res.status(200).json({ success: true, ...result });
		} catch (err) {
			next(err);
		}
	},

	// GET /api/payments/:id (Customer)
	async getById(req: AuthRequest, res: Response, next: NextFunction) {
		try {
			const id = validatePaymentIdParam(req.params.id);
			const customerId = req.user?.id;
			if (!customerId) {
				throw new ForbiddenError('You must be an authorized Customer');
			}
			const payment = await paymentService.getPaymentById(customerId, id);
			res.status(200).json({ success: true, data: payment });
		} catch (err) {
			next(err);
		}
	},
};

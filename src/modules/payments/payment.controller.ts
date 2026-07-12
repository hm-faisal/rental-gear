import type { Request, Response } from 'express';
import { ForbiddenError } from '../../errors/index.js';
import type { AuthRequest } from '../../middlewares/auth.middleware.js';
import catchAsync from '../../utils/catch-async.js';
import sendResponse from '../../utils/send-response.js';
import { paymentService } from './payment.service.js';
import {
	validateConfirmPaymentBody,
	validateCreatePaymentBody,
	validatePaymentIdParam,
} from './payment.validation.js';

const create = catchAsync(async (req: AuthRequest, res: Response) => {
	const { rentalOrderId } = validateCreatePaymentBody(req.body);
	const customerId = req.user?.id;

	if (!customerId) {
		throw new ForbiddenError('You must be an authorized Customer');
	}

	const result = await paymentService.createPaymentForOrder(
		customerId,
		rentalOrderId,
	);

	sendResponse(res, {
		statusCode: 201,
		success: true,
		data: result,
	});
});

const confirm = catchAsync(async (req: AuthRequest, res: Response) => {
	const { transactionId } = validateConfirmPaymentBody(req.body);
	const customerId = req.user?.id;

	if (!customerId) {
		throw new ForbiddenError('You must be an authorized Customer');
	}

	const payment = await paymentService.confirmPayment(customerId, transactionId);

	sendResponse(res, {
		statusCode: 200,
		success: true,
		data: payment,
	});
});

const webhook = catchAsync(async (req: Request, res: Response) => {
	const signature = req.headers['stripe-signature'];
	if (!signature || typeof signature !== 'string') {
		res
			.status(400)
			.json({ success: false, message: 'Missing Stripe-Signature header' });
		return;
	}

	try {
		const result = await paymentService.handleWebhookEvent(
			req.body as Buffer,
			signature,
		);
		res.status(200).json(result);
	} catch (err: any) {
		res.status(400).json({ success: false, message: err.message });
	}
});

const list = catchAsync(async (req: AuthRequest, res: Response) => {
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

	sendResponse(res, {
		statusCode: 200,
		success: true,
		meta: {
			page: result.page,
			limit: result.limit,
			total: result.total,
			totalPage: result.totalPages,
		},
		data: result.data,
	});
});

const getById = catchAsync(async (req: AuthRequest, res: Response) => {
	const id = validatePaymentIdParam(req.params.id);
	const customerId = req.user?.id;
	if (!customerId) {
		throw new ForbiddenError('You must be an authorized Customer');
	}

	const payment = await paymentService.getPaymentById(customerId, id);

	sendResponse(res, {
		statusCode: 200,
		success: true,
		data: payment,
	});
});

export const paymentController = {
	create,
	confirm,
	webhook,
	list,
	getById,
};

import type { Response } from 'express';
import type { AuthRequest } from '../../middlewares/auth.middleware.js';
import { ForbiddenError } from '@/errors';
import catchAsync from '../../utils/catch-async.js';
import sendResponse from '../../utils/send-response.js';
import { rentalService } from './rental.service.js';
import {
	validateRentalCreateInput,
	validateRentalIdParam,
	validateRentalListQuery,
} from './rental.validation.js';

const getCustomerId = (req: AuthRequest): string => {
	const customerId = req.user?.id;
	if (!customerId) {
		throw new ForbiddenError('Unauthorized');
	}
	return customerId;
};

const createRental = catchAsync(async (req: AuthRequest, res: Response) => {
	const customerId = getCustomerId(req);
	const validatedBody = validateRentalCreateInput(req.body);

	const rental = await rentalService.createRental(customerId, validatedBody);

	sendResponse(res, {
		statusCode: 201,
		success: true,
		message: 'Rental order created successfully',
		data: rental,
	});
});

const getRentalOrders = catchAsync(async (req: AuthRequest, res: Response) => {
	const customerId = getCustomerId(req);
	const filters = validateRentalListQuery(req.query);

	const result = await rentalService.getRentalOrders(customerId, filters);

	sendResponse(res, {
		statusCode: 200,
		success: true,
		message: 'Rental orders retrieved successfully',
		meta: {
			page: result.page,
			limit: result.limit,
			total: result.total,
			totalPage: result.totalPages,
		},
		data: result.data,
	});
});

const getRentalOrderById = catchAsync(
	async (req: AuthRequest, res: Response) => {
		const customerId = getCustomerId(req);
		const id = validateRentalIdParam(req.params.id);

		const rental = await rentalService.getRentalOrderById(customerId, id);

		sendResponse(res, {
			statusCode: 200,
			success: true,
			message: 'Rental order retrieved successfully',
			data: rental,
		});
	},
);

const cancelRentalOrder = catchAsync(
	async (req: AuthRequest, res: Response) => {
		const customerId = getCustomerId(req);
		const id = validateRentalIdParam(req.params.id);

		const rental = await rentalService.cancelRentalOrder(customerId, id);

		sendResponse(res, {
			statusCode: 200,
			success: true,
			message: 'Rental order cancelled successfully',
			data: rental,
		});
	},
);

export const rentalController = {
	createRental,
	getRentalOrders,
	getRentalOrderById,
	cancelRentalOrder,
};

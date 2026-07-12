import type { Response } from 'express';
import type { AuthRequest } from '../../middlewares/auth.middleware.js';
import { ForbiddenError } from '../../errors';
import catchAsync from '../../utils/catch-async.js';
import sendResponse from '../../utils/send-response.js';
import { providerService } from './provider.service.js';
import {
	validateGearIdParam,
	validateGearItemInput,
	validateOrderIdParam,
	validateOrderListQuery,
	validateOrderStatusUpdate,
} from './provider.validation.js';

const getProviderId = (req: AuthRequest): string => {
	const providerId = req.user?.id;
	if (!providerId) {
		throw new ForbiddenError('Unauthorized');
	}
	return providerId;
};

const addGearItem = catchAsync(async (req: AuthRequest, res: Response) => {
	const providerId = getProviderId(req);
	const validatedBody = validateGearItemInput(req.body);

	const gear = await providerService.addGearItem(providerId, validatedBody);

	sendResponse(res, {
		statusCode: 201,
		success: true,
		message: 'Gear item created successfully',
		data: gear,
	});
});

const updateGearItem = catchAsync(async (req: AuthRequest, res: Response) => {
	const providerId = getProviderId(req);
	const id = validateGearIdParam(req.params.id);
	const validatedBody = validateGearItemInput(req.body);

	const gear = await providerService.updateGearItem(
		providerId,
		id,
		validatedBody,
	);

	sendResponse(res, {
		statusCode: 200,
		success: true,
		message: 'Gear item updated successfully',
		data: gear,
	});
});

const deleteGearItem = catchAsync(async (req: AuthRequest, res: Response) => {
	const providerId = getProviderId(req);
	const id = validateGearIdParam(req.params.id);

	await providerService.deleteGearItem(providerId, id);

	res.status(204).end();
});

const getIncomingOrders = catchAsync(
	async (req: AuthRequest, res: Response) => {
		const providerId = getProviderId(req);
		const filters = validateOrderListQuery(req.query);

		const result = await providerService.getIncomingOrders(providerId, filters);

		sendResponse(res, {
			statusCode: 200,
			success: true,
			message: 'Incoming orders retrieved successfully',
			meta: {
				page: result.page,
				limit: result.limit,
				total: result.total,
				totalPage: result.totalPages,
			},
			data: result.data,
		});
	},
);

const updateOrderStatus = catchAsync(
	async (req: AuthRequest, res: Response) => {
		const providerId = getProviderId(req);
		const id = validateOrderIdParam(req.params.id);
		const { status } = validateOrderStatusUpdate(req.body);

		const order = await providerService.updateOrderStatus(
			providerId,
			id,
			status,
		);

		sendResponse(res, {
			statusCode: 200,
			success: true,
			message: 'Order status updated successfully',
			data: order,
		});
	},
);

export const providerController = {
	addGearItem,
	updateGearItem,
	deleteGearItem,
	getIncomingOrders,
	updateOrderStatus,
};

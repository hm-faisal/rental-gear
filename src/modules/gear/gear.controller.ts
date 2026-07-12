import type { Request, Response } from 'express';
import catchAsync from '../../utils/catch-async';
import sendResponse from '../../utils/send-response';
import { gearService } from './gear.service';
import { validateGearIdParam, validateGearListQuery } from './gear.validation';

const getGears = catchAsync(async (req: Request, res: Response) => {
	const filters = validateGearListQuery(req.query);
	const data = await gearService.getAllGears(filters);

	sendResponse(res, {
		success: true,
		statusCode: 200,
		data,
	});
});

const getGearsById = catchAsync(async (req: Request, res: Response) => {
	const id = validateGearIdParam(req.params.id);
	const data = await gearService.getGearById(id);

	sendResponse(res, {
		success: true,
		statusCode: 200,
		data,
	});
});

const getCategories = catchAsync(async (_req: Request, res: Response) => {
	const data = await gearService.getCategories();

	sendResponse(res, {
		success: true,
		statusCode: 200,
		data,
	});
});

export const gearController = {
	getGears,
	getGearsById,
	getCategories,
};

import catchAsync from '@/utils/catch-async';
import sendResponse from '@/utils/send-response';
import { gearService } from './gear.service';
import { validateGearIdParam, validateGearListQuery } from './gear.validation';

const getGears = catchAsync(async (req, res) => {
	const filters = validateGearListQuery(req.query);
	const data = await gearService.getAllGears(filters);

	sendResponse(res, {
		success: true,
		statusCode: 200,
		data,
	});
});

const getGearsById = catchAsync(async (req, res) => {
	const id = validateGearIdParam(req.params.id);
	const data = await gearService.getGearById(id);

	sendResponse(res, {
		success: true,
		statusCode: 200,
		data,
	});
});

const getCategories = catchAsync(async (_req, res) => {
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

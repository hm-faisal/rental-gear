import type { Request, Response } from 'express';
import catchAsync from '../../utils/catch-async.js';
import sendResponse from '../../utils/send-response.js';
import { adminService } from './admin.service.js';
import {
	validateCategoryCreateInput,
	validateCategoryUpdateInput,
	validateIdParam,
	validatePaginationQuery,
	validateRentalListQuery,
	validateUserListQuery,
	validateUserStatusUpdate,
} from './admin.validation.js';

const getAllUsers = catchAsync(async (req: Request, res: Response) => {
	const filters = validateUserListQuery(req.query);
	const result = await adminService.getAllUsers(filters);

	sendResponse(res, {
		statusCode: 200,
		success: true,
		message: 'Users retrieved successfully',
		meta: {
			page: result.page,
			limit: result.limit,
			total: result.total,
			totalPage: result.totalPages,
		},
		data: result.data,
	});
});

const updateUserStatus = catchAsync(async (req: Request, res: Response) => {
	const id = validateIdParam(req.params.id);
	const { status } = validateUserStatusUpdate(req.body);
	const result = await adminService.updateUserStatus(id, status);

	sendResponse(res, {
		statusCode: 200,
		success: true,
		message: 'User status updated successfully',
		data: result,
	});
});

const getAllGears = catchAsync(async (req: Request, res: Response) => {
	const filters = validatePaginationQuery(req.query);
	const result = await adminService.getAllGears(filters);

	sendResponse(res, {
		statusCode: 200,
		success: true,
		message: 'Gear listings retrieved successfully',
		meta: {
			page: result.page,
			limit: result.limit,
			total: result.total,
			totalPage: result.totalPages,
		},
		data: result.data,
	});
});

const getAllRentals = catchAsync(async (req: Request, res: Response) => {
	const filters = validateRentalListQuery(req.query);
	const result = await adminService.getAllRentals(filters);

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

const createCategory = catchAsync(async (req: Request, res: Response) => {
	const input = validateCategoryCreateInput(req.body);
	const result = await adminService.createCategory(input);

	sendResponse(res, {
		statusCode: 201,
		success: true,
		message: 'Category created successfully',
		data: result,
	});
});

const updateCategory = catchAsync(async (req: Request, res: Response) => {
	const id = validateIdParam(req.params.id);
	const input = validateCategoryUpdateInput(req.body);
	const result = await adminService.updateCategory(id, input);

	sendResponse(res, {
		statusCode: 200,
		success: true,
		message: 'Category updated successfully',
		data: result,
	});
});

const deleteCategory = catchAsync(async (req: Request, res: Response) => {
	const id = validateIdParam(req.params.id);
	await adminService.deleteCategory(id);

	res.status(204).end();
});

export const adminController = {
	getAllUsers,
	updateUserStatus,
	getAllGears,
	getAllRentals,
	createCategory,
	updateCategory,
	deleteCategory,
};

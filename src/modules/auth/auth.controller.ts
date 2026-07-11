import type { Request, Response } from 'express';
import type { AuthRequest } from '../../middlewares/auth.middleware.js';
import AppError from '../../utils/app-error.js';
import catchAsync from '../../utils/catch-async.js';
import sendResponse from '../../utils/send-response.js';
import { authService } from './auth.service.js';

const registerUser = catchAsync(async (req: Request, res: Response) => {
	const { name, email, password, role, phone, address } = req.body;

	// Undefined/null/empty checks
	if (name === undefined || name === null || name === '') {
		throw new AppError(400, 'Name is required');
	}
	if (email === undefined || email === null || email === '') {
		throw new AppError(400, 'Email is required');
	}
	if (password === undefined || password === null || password === '') {
		throw new AppError(400, 'Password is required');
	}

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(email)) {
		throw new AppError(400, 'Invalid email format');
	}
	if (password.length < 8) {
		throw new AppError(400, 'Password must be at least 8 characters long');
	}
	if (role && role !== 'CUSTOMER' && role !== 'PROVIDER') {
		throw new AppError(400, 'Role must be either CUSTOMER or PROVIDER');
	}

	const result = await authService.register({
		name,
		email,
		password,
		role,
		phone,
		address,
	});

	sendResponse(res, {
		statusCode: 201,
		success: true,
		message: 'User registered successfully',
		data: result,
	});
});

const loginUser = catchAsync(async (req: Request, res: Response) => {
	const { email, password } = req.body;

	// Undefined/null/empty checks as requested (no Zod)
	if (email === undefined || email === null || email === '') {
		throw new AppError(400, 'Email is required');
	}
	if (password === undefined || password === null || password === '') {
		throw new AppError(400, 'Password is required');
	}

	const result = await authService.login(req.body);

	// Set tokens in cookies
	res.cookie('accessToken', result.accessToken, {
		httpOnly: true,
		secure: process.env.NODE_ENV === 'production',
		sameSite: 'strict',
		maxAge: 24 * 60 * 60 * 1000, // 1 day
	});

	res.cookie('refreshToken', result.refreshToken, {
		httpOnly: true,
		secure: process.env.NODE_ENV === 'production',
		sameSite: 'strict',
		maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
	});

	sendResponse(res, {
		statusCode: 200,
		success: true,
		message: 'User logged in successfully',
		data: {
			accessToken: result.accessToken,
			user: result.user,
		},
	});
});

const getMe = catchAsync(async (req: AuthRequest, res: Response) => {
	if (!req.user) {
		throw new AppError(401, 'Unauthorized');
	}
	const userId = req.user.id;
	const user = await authService.getProfile(userId);

	sendResponse(res, {
		statusCode: 200,
		success: true,
		message: 'User profile retrieved successfully',
		data: user,
	});
});

const updateMe = catchAsync(async (req: AuthRequest, res: Response) => {
	if (!req.user) {
		throw new AppError(401, 'Unauthorized');
	}
	const userId = req.user.id;
	const { name, phone, address } = req.body;

	if (name !== undefined && (name === null || String(name).trim() === '')) {
		throw new AppError(400, 'Name cannot be empty');
	}

	const updatedUser = await authService.updateProfile(userId, {
		name: name !== undefined ? String(name).trim() : undefined,
		phone:
			phone !== undefined
				? phone === null
					? null
					: String(phone).trim()
				: undefined,
		address:
			address !== undefined
				? address === null
					? null
					: String(address).trim()
				: undefined,
	});

	sendResponse(res, {
		statusCode: 200,
		success: true,
		message: 'User profile updated successfully',
		data: updatedUser,
	});
});

export const authController = {
	registerUser,
	loginUser,
	getMe,
	updateMe,
};

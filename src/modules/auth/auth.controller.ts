import type { Request, Response } from 'express';
import { BadRequestError, ForbiddenError } from '@/errors';
import type { AuthRequest } from '../../middlewares/auth.middleware.js';
import catchAsync from '../../utils/catch-async.js';
import sendResponse from '../../utils/send-response.js';
import { authService } from './auth.service.js';

const registerUser = catchAsync(async (req: Request, res: Response) => {
	const { name, email, password, role, phone, address } = req.body;

	// Undefined/null/empty checks
	if (name === undefined || name === null || name === '') {
		throw new BadRequestError('Name is required');
	}
	if (email === undefined || email === null || email === '') {
		throw new BadRequestError('Email is required');
	}
	if (password === undefined || password === null || password === '') {
		throw new BadRequestError('Password is required');
	}

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(email)) {
		throw new BadRequestError('Invalid email format');
	}
	if (password.length < 8) {
		throw new BadRequestError('Password must be at least 8 characters long');
	}
	if (role && role !== 'CUSTOMER' && role !== 'PROVIDER') {
		throw new BadRequestError('Role must be either CUSTOMER or PROVIDER');
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
		throw new BadRequestError('Email is required');
	}
	if (password === undefined || password === null || password === '') {
		throw new BadRequestError('Password is required');
	}

	const result = await authService.login(req.body);

	// Set tokens in cookies
	res.cookie('accessToken', result.accessToken, {
		httpOnly: true,
		secure: process.env.NODE_ENV === 'production',
		sameSite: 'strict',
		maxAge: 24 * 60 * 60 * 1000, // 1 day
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
		throw new ForbiddenError('Unauthorized');
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
		throw new ForbiddenError('Unauthorized');
	}
	const userId = req.user.id;
	const { name, phone, address } = req.body;

	if (name !== undefined && (name === null || String(name).trim() === '')) {
		throw new BadRequestError('Name cannot be empty');
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

import type { Request, Response } from 'express';
import { AppError } from '@/errors';

export const errorHandler = (
	err: AppError,
	_req: Request,
	res: Response,
): void => {
	let statusCode = err.statusCode || 500;
	let message = err.message || 'Something went wrong';
	let errorDetails: unknown = err.errorDetails;

	if (!(err instanceof AppError)) {
		statusCode = 500;
		message = 'Internal server error';
		errorDetails = undefined;
	}

	const responseBody: Record<string, unknown> = {
		success: false,
		message,
		stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
	};

	if (errorDetails !== undefined) {
		responseBody.errorDetails = errorDetails;
	}

	res.status(statusCode).json(responseBody);
};

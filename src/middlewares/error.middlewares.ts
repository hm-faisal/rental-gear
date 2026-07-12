import type { NextFunction, Request, Response } from 'express';
import { AppError } from '../errors';

export const errorHandler = (
	err: AppError,
	_req: Request,
	res: Response,
	_next: NextFunction,
): void => {
	const statusCode = err instanceof AppError ? err.statusCode : 500;
	const message = err instanceof AppError ? err.message : 'Internal server error';
	const errorDetails = err instanceof AppError ? (err.errorDetails ?? null) : null;

	res.status(statusCode).json({
		success: false,
		message,
		errorDetails,
		...(process.env.NODE_ENV === 'development' ? { stack: err.stack } : {}),
	});
};

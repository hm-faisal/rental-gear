import type { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { env } from '../config';
import { ForbiddenError, UnauthorizedError } from '../errors';
import { prisma } from '../lib/prisma';

declare global {
	namespace Express {
		interface Request {
			user?: {
				id: string;
				email: string;
				role: string;
			};
		}
	}
}

export interface AuthRequest extends Request {
	user?: {
		id: string;
		email: string;
		role: string;
	};
}

export const auth = (roles?: string[]) => {
	return async (
		req: Request,
		_res: Response,
		next: NextFunction,
	): Promise<void> => {
		try {
			let token = req.cookies?.accessToken;

			if (!token && req.headers.authorization?.startsWith('Bearer ')) {
				token = req.headers.authorization.split(' ')[1];
			}

			if (!token) {
				throw new UnauthorizedError(
					'You are not logged in! Please log in to get access.',
				);
			}

			const decoded = jwt.verify(
				token,
				env.jwt_access_secret || 'fallback_access_secret',
			) as { id: string; email: string; role: string };

			// Check if user still exists
			const user = await prisma.user.findFirst({
				where: { id: decoded.id },
			});

			if (!user) {
				throw new UnauthorizedError(
					'The user belonging to this token no longer exists.',
				);
			}

			// Check if user is suspended
			if (user.status === 'SUSPENDED') {
				throw new ForbiddenError('Your account is suspended.');
			}

			// Check role authorization if roles are specified
			if (roles && roles.length > 0 && !roles.includes(user.role)) {
				throw new ForbiddenError(
					'You do not have permission to perform this action.',
				);
			}

			// Add user info to request
			req.user = {
				id: user.id,
				email: user.email,
				role: user.role,
			};

			next();
		} catch (error: any) {
			if (
				error instanceof UnauthorizedError ||
				error instanceof ForbiddenError
			) {
				next(error);
				return;
			}
			next(
				new UnauthorizedError('Invalid or expired token. Please log in again.'),
			);
		}
	};
};

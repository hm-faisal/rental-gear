import type { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { env } from '../config';
import { prisma } from '../lib/prisma';

export interface AuthRequest extends Request {
	user?: {
		id: string;
		email: string;
		role: string;
	};
}

export const auth = (roles?: string[]) => {
	return async (
		req: AuthRequest,
		res: Response,
		next: NextFunction,
	): Promise<void> => {
		try {
			let token = req.cookies?.accessToken;

			if (!token && req.headers.authorization?.startsWith('Bearer ')) {
				token = req.headers.authorization.split(' ')[1];
			}

			if (!token) {
				res.status(401).json({
					success: false,
					message: 'You are not logged in! Please log in to get access.',
				});
				return;
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
				res.status(401).json({
					success: false,
					message: 'The user belonging to this token no longer exists.',
				});
				return;
			}

			// Check if user is suspended
			if (user.status === 'SUSPENDED') {
				res.status(403).json({
					success: false,
					message: 'Your account is suspended.',
				});
				return;
			}

			// Check role authorization if roles are specified
			if (roles && roles.length > 0 && !roles.includes(user.role)) {
				res.status(403).json({
					success: false,
					message: 'You do not have permission to perform this action.',
				});
				return;
			}

			// Add user info to request
			req.user = {
				id: user.id,
				email: user.email,
				role: user.role,
			};

			next();
		} catch (error: any) {
			res.status(401).json({
				success: false,
				message: 'Invalid or expired token. Please log in again.',
				error: error.message,
			});
		}
	};
};

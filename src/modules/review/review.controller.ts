import type { Response } from 'express';
import type { AuthRequest } from '../../middlewares/auth.middleware.js';
import AppError from '../../utils/app-error.js';
import catchAsync from '../../utils/catch-async.js';
import sendResponse from '../../utils/send-response.js';
import { reviewService } from './review.service.js';
import { validateReviewCreateInput } from './review.validation.js';

const getCustomerId = (req: AuthRequest): string => {
	const customerId = req.user?.id;
	if (!customerId) {
		throw new AppError(401, 'Unauthorized');
	}
	return customerId;
};

const createReview = catchAsync(async (req: AuthRequest, res: Response) => {
	const customerId = getCustomerId(req);
	const validatedBody = validateReviewCreateInput(req.body);

	const review = await reviewService.createReview(customerId, validatedBody);

	sendResponse(res, {
		statusCode: 201,
		success: true,
		message: 'Review created successfully',
		data: review,
	});
});

export const reviewController = {
	createReview,
};

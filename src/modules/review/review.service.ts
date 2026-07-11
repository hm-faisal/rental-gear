import { RentalStatus } from '../../../generated/prisma/index.js';
import { prisma } from '../../lib/prisma.js';
import AppError from '../../utils/app-error.js';
import type { ReviewCreateInput } from './review.validation.js';

const createReview = async (customerId: string, payload: ReviewCreateInput) => {
	const { rentalOrderId, gearItemId, rating, comment } = payload;

	// 1. Get the rental order and its items
	const order = await prisma.rentalOrder.findUnique({
		where: { id: rentalOrderId },
		include: {
			items: true,
		},
	});

	if (!order) {
		throw new AppError(404, 'Rental order not found');
	}

	// 2. Verify authorization
	if (order.customerId !== customerId) {
		throw new AppError(
			403,
			'You do not have permission to perform this action',
		);
	}

	// 3. Verify order status is RETURNED
	if (order.status !== RentalStatus.RETURNED) {
		throw new AppError(409, 'Order not yet RETURNED');
	}

	// 4. Verify the gear item was part of this order
	const itemInOrder = order.items.some(
		(item) => item.gearItemId === gearItemId,
	);
	if (!itemInOrder) {
		throw new AppError(400, 'This gear item was not part of the rental order');
	}

	// 5. Verify review doesn't already exist for this rental order
	const existingReview = await prisma.review.findUnique({
		where: { rentalOrderId },
	});

	if (existingReview) {
		throw new AppError(409, 'A review already exists for this order');
	}

	// 6. Create the review
	const review = await prisma.review.create({
		data: {
			customerId,
			gearItemId,
			rentalOrderId,
			rating,
			comment: comment || null,
		},
	});

	return review;
};

export const reviewService = {
	createReview,
};

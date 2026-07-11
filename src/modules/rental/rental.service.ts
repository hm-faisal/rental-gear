import { RentalStatus } from '../../../generated/prisma/index.js';
import { prisma } from '../../lib/prisma.js';
import { BadRequestError, ConflictError, ForbiddenError, NotFoundError } from '@/errors';
import type { RentalCreateInput } from './rental.validation.js';

const createRental = async (customerId: string, payload: RentalCreateInput) => {
	const { startDate, endDate, items } = payload;

	const start = new Date(startDate);
	const end = new Date(endDate);

	// 1. Verify all gear items exist and check availability / stock
	const gearItemsData = [];
	for (const item of items) {
		const gear = await prisma.gearItem.findUnique({
			where: { id: item.gearItemId },
		});

		if (!gear) {
			throw new NotFoundError(`Gear item not found: ${item.gearItemId}`);
		}

		if (!gear.isAvailable) {
			throw new BadRequestError(`Gear item is not available: ${gear.name}`);
		}

		gearItemsData.push(gear);
	}

	// 2. Check stock conflicts for overlapping date ranges
	for (let i = 0; i < items.length; i++) {
		const item = items[i];
		const gear = gearItemsData[i];
		if (!item || !gear) {
			continue;
		}

		// Find active overlapping rental orders for this gear item
		const overlappingOrders = await prisma.rentalOrder.findMany({
			where: {
				status: {
					in: [
						RentalStatus.PLACED,
						RentalStatus.CONFIRMED,
						RentalStatus.PAID,
						RentalStatus.PICKED_UP,
					],
				},
				startDate: { lte: end },
				endDate: { gte: start },
				items: {
					some: {
						gearItemId: item.gearItemId,
					},
				},
			},
			include: {
				items: true,
			},
		});

		// Calculate total reserved quantity on these overlapping dates
		let reservedQty = 0;
		for (const order of overlappingOrders) {
			const orderItem = order.items.find(
				(oi) => oi.gearItemId === item.gearItemId,
			);
			if (orderItem) {
				reservedQty += orderItem.quantity;
			}
		}

		const availableQty = gear.stockQuantity - reservedQty;
		if (item.quantity > availableQty) {
			throw new ConflictError(
				`One or more gear items unavailable for the requested dates`,
			);
		}
	}

	// 3. Calculate rental duration and totalAmount
	const diffTime = Math.abs(end.getTime() - start.getTime());
	const durationDays = Math.max(
		1,
		Math.round(diffTime / (1000 * 60 * 60 * 24)),
	);

	let totalAmount = 0;
	const rentalOrderItemsData: {
		gearItemId: string;
		quantity: number;
		price: number;
	}[] = [];

	for (let i = 0; i < items.length; i++) {
		const item = items[i];
		const gear = gearItemsData[i];
		if (!item || !gear) {
			continue;
		}
		const itemPrice = Number(gear.price);
		const itemTotal = itemPrice * item.quantity * durationDays;
		totalAmount += itemTotal;

		rentalOrderItemsData.push({
			gearItemId: item.gearItemId,
			quantity: item.quantity,
			price: itemPrice,
		});
	}

	// 4. Create the rental order and items in a database transaction
	const result = await prisma.$transaction(async (tx) => {
		const order = await tx.rentalOrder.create({
			data: {
				customerId,
				startDate: start,
				endDate: end,
				totalAmount,
				status: RentalStatus.PLACED,
				items: {
					create: rentalOrderItemsData,
				},
			},
			include: {
				items: true,
			},
		});
		return order;
	});

	return result;
};

const getRentalOrders = async (
	customerId: string,
	filters: { status?: RentalStatus; page: number; limit: number },
) => {
	const { status, page, limit } = filters;

	const whereClause = {
		customerId,
		...(status && { status }),
	};

	const total = await prisma.rentalOrder.count({
		where: whereClause,
	});

	const orders = await prisma.rentalOrder.findMany({
		where: whereClause,
		include: {
			items: {
				include: {
					gearItem: {
						select: {
							id: true,
							name: true,
							brand: true,
							images: true,
						},
					},
				},
			},
		},
		orderBy: { createdAt: 'desc' },
		skip: (page - 1) * limit,
		take: limit,
	});

	return {
		data: orders,
		page,
		limit,
		total,
		totalPages: Math.max(1, Math.ceil(total / limit)),
	};
};

const getRentalOrderById = async (customerId: string, orderId: string) => {
	const order = await prisma.rentalOrder.findUnique({
		where: { id: orderId },
		include: {
			items: {
				include: {
					gearItem: {
						select: {
							id: true,
							name: true,
							brand: true,
							images: true,
						},
					},
				},
			},
		},
	});

	if (!order) {
		throw new NotFoundError('Rental order not found');
	}

	if (order.customerId !== customerId) {
		throw new ForbiddenError(
			'You do not have permission to access this resource',
		);
	}

	return order;
};

const cancelRentalOrder = async (customerId: string, orderId: string) => {
	const order = await prisma.rentalOrder.findUnique({
		where: { id: orderId },
	});

	if (!order) {
		throw new NotFoundError('Rental order not found');
	}

	if (order.customerId !== customerId) {
		throw new ForbiddenError(
			'You do not have permission to access this resource',
		);
	}

	if (order.status !== RentalStatus.PLACED) {
		throw new ConflictError('Order cannot be cancelled in its current status');
	}

	const updatedOrder = await prisma.rentalOrder.update({
		where: { id: orderId },
		data: {
			status: RentalStatus.CANCELLED,
		},
		include: {
			items: true,
		},
	});

	return updatedOrder;
};

export const rentalService = {
	createRental,
	getRentalOrders,
	getRentalOrderById,
	cancelRentalOrder,
};

import { RentalStatus } from '../../../generated/prisma/index.js';
import { prisma } from '../../lib/prisma.js';
import AppError from '../../utils/app-error.js';
import type { GearItemInput } from './provider.validation.js';

const addGearItem = async (providerId: string, input: GearItemInput) => {
	// Verify category exists
	const category = await prisma.category.findUnique({
		where: { id: input.categoryId },
	});
	if (!category) {
		throw new AppError(400, 'Category not found');
	}

	const gear = await prisma.gearItem.create({
		data: {
			providerId,
			categoryId: input.categoryId,
			name: input.name,
			description: input.description || null,
			brand: input.brand || null,
			price: input.price,
			stockQuantity: input.stockQuantity,
			isAvailable: input.isAvailable !== undefined ? input.isAvailable : true,
			images: input.images || [],
		},
	});

	return gear;
};

const updateGearItem = async (
	providerId: string,
	id: string,
	input: GearItemInput,
) => {
	// Verify gear item exists and belongs to the provider
	const gear = await prisma.gearItem.findUnique({
		where: { id },
	});
	if (!gear) {
		throw new AppError(404, 'Gear item not found');
	}
	if (gear.providerId !== providerId) {
		throw new AppError(
			403,
			'You do not have permission to perform this action',
		);
	}

	// Verify category exists
	const category = await prisma.category.findUnique({
		where: { id: input.categoryId },
	});
	if (!category) {
		throw new AppError(400, 'Category not found');
	}

	const updatedGear = await prisma.gearItem.update({
		where: { id },
		data: {
			categoryId: input.categoryId,
			name: input.name,
			description: input.description || null,
			brand: input.brand || null,
			price: input.price,
			stockQuantity: input.stockQuantity,
			isAvailable: input.isAvailable !== undefined ? input.isAvailable : true,
			images: input.images || [],
		},
	});

	return updatedGear;
};

const deleteGearItem = async (providerId: string, id: string) => {
	// Verify gear item exists and belongs to the provider
	const gear = await prisma.gearItem.findUnique({
		where: { id },
	});
	if (!gear) {
		throw new AppError(404, 'Gear item not found');
	}
	if (gear.providerId !== providerId) {
		throw new AppError(
			403,
			'You do not have permission to perform this action',
		);
	}

	await prisma.gearItem.delete({
		where: { id },
	});
};

const getIncomingOrders = async (
	providerId: string,
	filters: { status?: RentalStatus; page: number; limit: number },
) => {
	const { status, page, limit } = filters;

	const whereClause = {
		items: {
			some: {
				gearItem: {
					providerId,
				},
			},
		},
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
							providerId: true,
						},
					},
				},
			},
			customer: {
				select: {
					id: true,
					name: true,
					email: true,
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

const updateOrderStatus = async (
	providerId: string,
	orderId: string,
	status: 'CONFIRMED' | 'PICKED_UP' | 'RETURNED',
) => {
	// Get order and its items
	const order = await prisma.rentalOrder.findUnique({
		where: { id: orderId },
		include: {
			items: {
				include: {
					gearItem: true,
				},
			},
		},
	});

	if (!order) {
		throw new AppError(404, 'Rental order not found');
	}

	// Verify that at least one gear item in the order belongs to this provider
	const belongsToProvider = order.items.some(
		(item) => item.gearItem.providerId === providerId,
	);
	if (!belongsToProvider) {
		throw new AppError(
			403,
			'You do not have permission to perform this action',
		);
	}

	// State transitions check
	if (status === 'CONFIRMED') {
		if (order.status !== RentalStatus.PLACED) {
			throw new AppError(
				409,
				'Order can only be confirmed when it is in PLACED status',
			);
		}
	} else if (status === 'PICKED_UP') {
		if (order.status !== RentalStatus.PAID) {
			throw new AppError(
				409,
				'Order can only be marked picked up when it is in PAID status',
			);
		}
	} else if (status === 'RETURNED') {
		if (order.status !== RentalStatus.PICKED_UP) {
			throw new AppError(
				409,
				'Order can only be marked returned when it is in PICKED_UP status',
			);
		}
	}

	// If returned, increment stock back for this provider's gear items in the order
	if (status === 'RETURNED') {
		for (const item of order.items) {
			if (item.gearItem.providerId === providerId) {
				await prisma.gearItem.update({
					where: { id: item.gearItemId },
					data: {
						stockQuantity: {
							increment: item.quantity,
						},
					},
				});
			}
		}
	}

	// Update the order status
	const updatedOrder = await prisma.rentalOrder.update({
		where: { id: orderId },
		data: {
			status: status as RentalStatus,
		},
		include: {
			items: {
				include: {
					gearItem: {
						select: {
							id: true,
							name: true,
							providerId: true,
						},
					},
				},
			},
			customer: {
				select: {
					id: true,
					name: true,
					email: true,
				},
			},
		},
	});

	return updatedOrder;
};

export const providerService = {
	addGearItem,
	updateGearItem,
	deleteGearItem,
	getIncomingOrders,
	updateOrderStatus,
};

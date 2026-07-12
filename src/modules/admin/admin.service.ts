import { BadRequestError, NotFoundError } from '../../errors';
import type {
	RentalStatus,
	Role,
	UserStatus,
} from '../../generated/prisma/index.js';
import { prisma } from '../../lib/prisma.js';

const getAllUsers = async (filters: {
	role?: Role;
	status?: UserStatus;
	page: number;
	limit: number;
}) => {
	const { role, status, page, limit } = filters;

	const whereClause = {
		...(role && { role }),
		...(status && { status }),
	};

	const total = await prisma.user.count({
		where: whereClause,
	});

	const users = await prisma.user.findMany({
		where: whereClause,
		omit: { passwordHash: true },
		orderBy: { createdAt: 'desc' },
		skip: (page - 1) * limit,
		take: limit,
	});

	return {
		data: users,
		page,
		limit,
		total,
		totalPages: Math.max(1, Math.ceil(total / limit)),
	};
};

const updateUserStatus = async (id: string, status: UserStatus) => {
	const user = await prisma.user.findUnique({
		where: { id },
	});

	if (!user) {
		throw new NotFoundError('User not found');
	}

	const updatedUser = await prisma.user.update({
		where: { id },
		data: { status },
		omit: { passwordHash: true },
	});

	return updatedUser;
};

const getAllGears = async (filters: { page: number; limit: number }) => {
	const { page, limit } = filters;

	const total = await prisma.gearItem.count();

	const gears = await prisma.gearItem.findMany({
		include: {
			reviews: { select: { rating: true } },
		},
		orderBy: { createdAt: 'desc' },
		skip: (page - 1) * limit,
		take: limit,
	});

	const mappedGears = gears.map((gear) => {
		const ratings = gear.reviews.map((r) => r.rating);
		const averageRating = ratings.length
			? Number(
					(ratings.reduce((sum, r) => sum + r, 0) / ratings.length).toFixed(2),
				)
			: null;
		const { reviews, ...rest } = gear;
		return { ...rest, averageRating };
	});

	return {
		data: mappedGears,
		page,
		limit,
		total,
		totalPages: Math.max(1, Math.ceil(total / limit)),
	};
};

const getAllRentals = async (filters: {
	status?: RentalStatus;
	page: number;
	limit: number;
}) => {
	const { status, page, limit } = filters;

	const whereClause = {
		...(status && { status }),
	};

	const total = await prisma.rentalOrder.count({
		where: whereClause,
	});

	const rentals = await prisma.rentalOrder.findMany({
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
		data: rentals,
		page,
		limit,
		total,
		totalPages: Math.max(1, Math.ceil(total / limit)),
	};
};

const createCategory = async (input: {
	name: string;
	description?: string;
}) => {
	const existing = await prisma.category.findUnique({
		where: { name: input.name },
	});

	if (existing) {
		throw new BadRequestError('Category with this name already exists');
	}

	const category = await prisma.category.create({
		data: {
			name: input.name,
			description: input.description || null,
		},
	});

	return category;
};

const updateCategory = async (
	id: string,
	input: { name?: string; description?: string },
) => {
	const category = await prisma.category.findUnique({
		where: { id },
	});

	if (!category) {
		throw new NotFoundError('Category not found');
	}

	if (input.name) {
		const existing = await prisma.category.findUnique({
			where: { name: input.name },
		});
		if (existing && existing.id !== id) {
			throw new BadRequestError('Category with this name already exists');
		}
	}

	const updatedCategory = await prisma.category.update({
		where: { id },
		data: {
			...(input.name && { name: input.name }),
			...(input.description !== undefined && {
				description: input.description || null,
			}),
		},
	});

	return updatedCategory;
};

const deleteCategory = async (id: string) => {
	const category = await prisma.category.findUnique({
		where: { id },
	});

	if (!category) {
		throw new NotFoundError('Category not found');
	}

	const associatedGearsCount = await prisma.gearItem.count({
		where: { categoryId: id },
	});

	if (associatedGearsCount > 0) {
		throw new BadRequestError(
			'Cannot delete category with associated gear items',
		);
	}

	await prisma.category.delete({
		where: { id },
	});
};

export const adminService = {
	getAllUsers,
	updateUserStatus,
	getAllGears,
	getAllRentals,
	createCategory,
	updateCategory,
	deleteCategory,
};

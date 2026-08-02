import { NotFoundError } from '../../errors';
import type { Prisma } from '../../generated/prisma';
import { prisma } from '../../lib/prisma';
import type { GearListFilters } from './gear.validation';

const getAllGears = async (filters: GearListFilters) => {
	const {
		category,
		brand,
		minPrice,
		maxPrice,
		available,
		search,
		page,
		limit,
	} = filters;

	const where: Prisma.GearItemWhereInput = {
		...(available !== undefined
			? { isAvailable: available }
			: { isAvailable: true }),
		...(category && {
			category: {
				is: {
					OR: [
						{ id: category },
						{ name: { equals: category, mode: 'insensitive' } },
					],
				},
			},
		}),
		...(brand && { brand: { equals: brand, mode: 'insensitive' } }),
		...((minPrice !== undefined || maxPrice !== undefined) && {
			price: {
				...(minPrice !== undefined && { gte: minPrice }),
				...(maxPrice !== undefined && { lte: maxPrice }),
			},
		}),
		...(search && {
			OR: [
				{ name: { contains: search, mode: 'insensitive' } },
				{ description: { contains: search, mode: 'insensitive' } },
			],
		}),
	};

	const total = await prisma.gearItem.count({ where });

	const query = await prisma.gearItem.findMany({
		where,
		include: {
			reviews: { select: { rating: true } },
		},
		orderBy: { createdAt: 'desc' },
		skip: (page - 1) * limit,
		take: limit,
	});

	const mappedData = query.map((item) => {
		const ratings = item.reviews.map((r) => r.rating);
		const averageRating = ratings.length
			? Number(
					(ratings.reduce((sum, r) => sum + r, 0) / ratings.length).toFixed(2),
				)
			: 0;

		const { reviews, ...rest } = item;
		return { ...rest, averageRating };
	});

	return {
		data: mappedData,
		page,
		limit,
		total,
		totalPages: Math.max(1, Math.ceil(total / limit)),
	};
};

const getGearById = async (id: string) => {
	const gear = await prisma.gearItem.findUnique({
		where: { id },
		include: {
			reviews: { select: { rating: true } },
		},
	});

	if (!gear) {
		throw new NotFoundError('Gear item not found');
	}

	const ratings = gear.reviews.map((r) => r.rating);
	const averageRating = ratings.length
		? Number(
				(ratings.reduce((sum, r) => sum + r, 0) / ratings.length).toFixed(2),
			)
		: 0;

	const { reviews, ...rest } = gear;
	return { ...rest, averageRating };
};

const getCategories = async () => {
	return prisma.category.findMany();
};

export const gearService = {
	getAllGears,
	getGearById,
	getCategories,
};

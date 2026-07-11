import { prisma } from '@/lib/prisma';
import AppError from '@/utils/app-error';
import type { GearItem, Prisma, Review } from '../../../generated/prisma';
import type { GearListFilters } from './gear.validation';

type GearWithReviews = GearItem & {
	category: { id: string; name: string };
	reviews: Pick<Review, 'rating'>[];
};

function withAverageRating<T extends { reviews: Pick<Review, 'rating'>[] }>(
	gear: T,
) {
	const ratings = gear.reviews.map((r) => r.rating);
	const averageRating = ratings.length
		? Number(
				(ratings.reduce((sum, r) => sum + r, 0) / ratings.length).toFixed(2),
			)
		: null;

	const { reviews, ...rest } = gear;
	return { ...rest, averageRating, reviewCount: ratings.length };
}

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
			category: { select: { id: true, name: true } },
			reviews: { select: { rating: true } },
			_count: true,
		},
		orderBy: { createdAt: 'desc' },
		skip: (page - 1) * limit,
		take: limit,
	});

	const mappedData = query.map((item) =>
		withAverageRating(item as GearWithReviews),
	);

	return {
		data: mappedData,
		page,
		limit,
		total,
		totalPages: Math.max(1, Math.ceil(total / limit)),
	};
};

export const gearService = {
	getAllGears,

	/**
	 * Gear details with specifications, provider info, and reviews (FR-2.3).
	 */
	async getGearById(id: string) {
		const gear = await prisma.gearItem.findUnique({
			where: { id },
			include: {
				category: { select: { id: true, name: true } },
				provider: { select: { id: true, name: true } },
				reviews: {
					orderBy: { createdAt: 'desc' },
					include: { customer: { select: { id: true, name: true } } },
				},
			},
		});

		if (!gear) {
			throw new AppError(404, 'Gear item not found');
		}

		return withAverageRating(gear as GearWithReviews);
	},

	async getCategories() {
		return prisma.category.findMany();
	},
};

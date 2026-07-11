import { BadRequestError } from '@/errors';

export interface GearListFilters {
	category?: string;
	brand?: string;
	minPrice?: number;
	maxPrice?: number;
	available?: boolean;
	search?: string;
	page: number;
	limit: number;
}

const UUID_REGEX =
	/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export function validateGearListQuery(
	query: Record<string, unknown>,
): GearListFilters {
	const errors: string[] = [];

	const category = query.category ? String(query.category).trim() : undefined;
	const brand = query.brand ? String(query.brand).trim() : undefined;
	const search = query.search ? String(query.search).trim() : undefined;

	if (search !== undefined && search.length < 1) {
		errors.push('search cannot be empty');
	}

	let minPrice: number | undefined;
	if (query.minPrice !== undefined && query.minPrice !== '') {
		minPrice = Number(query.minPrice);
		if (Number.isNaN(minPrice) || minPrice < 0) {
			errors.push('minPrice must be a non-negative number');
			minPrice = undefined;
		}
	}

	let maxPrice: number | undefined;
	if (query.maxPrice !== undefined && query.maxPrice !== '') {
		maxPrice = Number(query.maxPrice);
		if (Number.isNaN(maxPrice) || maxPrice < 0) {
			errors.push('maxPrice must be a non-negative number');
			maxPrice = undefined;
		}
	}

	if (minPrice !== undefined && maxPrice !== undefined && minPrice > maxPrice) {
		errors.push('minPrice cannot be greater than maxPrice');
	}

	let available: boolean | undefined;
	if (query.available !== undefined && query.available !== '') {
		if (query.available === 'true' || query.available === true) {
			available = true;
		} else if (query.available === 'false' || query.available === false) {
			available = false;
		} else {
			errors.push("available must be 'true' or 'false'");
		}
	}

	let page = 1;
	if (query.page !== undefined && query.page !== '') {
		const parsedPage = Number(query.page);
		if (!Number.isInteger(parsedPage) || parsedPage < 1) {
			errors.push('page must be a positive integer');
		} else {
			page = parsedPage;
		}
	}

	let limit = 20;
	if (query.limit !== undefined && query.limit !== '') {
		const parsedLimit = Number(query.limit);
		if (
			!Number.isInteger(parsedLimit) ||
			parsedLimit < 1 ||
			parsedLimit > 100
		) {
			errors.push('limit must be an integer between 1 and 100');
		} else {
			limit = parsedLimit;
		}
	}

	if (errors.length > 0) {
		throw new BadRequestError('Validation failed', errors);
	}

	return {
		category,
		brand,
		minPrice,
		maxPrice,
		available,
		search,
		page,
		limit,
	};
}

export function validateGearIdParam(id: unknown): string {
	if (!id || typeof id !== 'string' || !UUID_REGEX.test(id)) {
		throw new BadRequestError('Invalid gear item ID');
	}
	return id;
}

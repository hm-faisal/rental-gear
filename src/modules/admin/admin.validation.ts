import { BadRequestError } from '@/errors';
import {
	RentalStatus,
	Role,
	UserStatus,
} from '../../../generated/prisma/index.js';

const UUID_REGEX =
	/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export function validateIdParam(id: unknown): string {
	if (!id || typeof id !== 'string' || !UUID_REGEX.test(id)) {
		throw new BadRequestError('Invalid id format');
	}
	return id;
}

export function validateUserListQuery(query: Record<string, unknown>): {
	role?: Role;
	status?: UserStatus;
	page: number;
	limit: number;
} {
	const errors: string[] = [];
	let role: Role | undefined;
	let status: UserStatus | undefined;

	if (query.role !== undefined && query.role !== '') {
		const roleStr = String(query.role).toUpperCase();
		if (Object.values(Role).includes(roleStr as Role)) {
			role = roleStr as Role;
		} else {
			errors.push(
				`role must be one of: ${Object.values(Role)
					.map((r) => r.toLowerCase())
					.join(', ')}`,
			);
		}
	}

	if (query.status !== undefined && query.status !== '') {
		const statusStr = String(query.status).toUpperCase();
		if (Object.values(UserStatus).includes(statusStr as UserStatus)) {
			status = statusStr as UserStatus;
		} else {
			errors.push(
				`status must be one of: ${Object.values(UserStatus)
					.map((s) => s.toLowerCase())
					.join(', ')}`,
			);
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
		throw new BadRequestError('Query parameter error', errors.join(', '));
	}

	return { role, status, page, limit };
}

export function validateUserStatusUpdate(body: Record<string, unknown>): {
	status: UserStatus;
} {
	if (
		body.status === undefined ||
		body.status === null ||
		String(body.status).trim() === ''
	) {
		throw new BadRequestError('status is required');
	}

	const statusStr = String(body.status).toUpperCase();
	if (!Object.values(UserStatus).includes(statusStr as UserStatus)) {
		throw new BadRequestError(
			`status must be one of: ${Object.values(UserStatus)
				.map((s) => s.toLowerCase())
				.join(', ')}`,
		);
	}

	return { status: statusStr as UserStatus };
}

export function validatePaginationQuery(query: Record<string, unknown>): {
	page: number;
	limit: number;
} {
	const errors: string[] = [];

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
		throw new BadRequestError('Pagination query errors', errors.join(', '));
	}

	return { page, limit };
}

export function validateRentalListQuery(query: Record<string, unknown>): {
	status?: RentalStatus;
	page: number;
	limit: number;
} {
	const errors: string[] = [];
	let status: RentalStatus | undefined;

	if (query.status !== undefined && query.status !== '') {
		const statusStr = String(query.status).toUpperCase();
		if (Object.values(RentalStatus).includes(statusStr as RentalStatus)) {
			status = statusStr as RentalStatus;
		} else {
			errors.push(
				`status must be a valid RentalStatus: ${Object.values(RentalStatus).join(', ')}`,
			);
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
		throw new BadRequestError(errors.join(', '));
	}

	return { status, page, limit };
}

export function validateCategoryCreateInput(body: Record<string, unknown>): {
	name: string;
	description?: string;
} {
	if (
		body.name === undefined ||
		body.name === null ||
		String(body.name).trim() === ''
	) {
		throw new BadRequestError('Name is required');
	}

	return {
		name: String(body.name).trim(),
		description:
			body.description !== undefined && body.description !== null
				? String(body.description).trim()
				: undefined,
	};
}

export function validateCategoryUpdateInput(body: Record<string, unknown>): {
	name?: string;
	description?: string;
} {
	const result: { name?: string; description?: string } = {};

	if (body.name !== undefined && body.name !== null) {
		if (String(body.name).trim() === '') {
			throw new BadRequestError('Name cannot be empty');
		}
		result.name = String(body.name).trim();
	}

	if (body.description !== undefined && body.description !== null) {
		result.description = String(body.description).trim();
	}

	return result;
}

import { BadRequestError } from '../../errors';

const UUID_REGEX =
	/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export interface ReviewCreateInput {
	rentalOrderId: string;
	gearItemId: string;
	rating: number;
	comment?: string;
}

export function validateReviewCreateInput(
	body: Record<string, unknown>,
): ReviewCreateInput {
	const errors: string[] = [];

	if (
		body.rentalOrderId === undefined ||
		body.rentalOrderId === null ||
		String(body.rentalOrderId).trim() === ''
	) {
		errors.push('rentalOrderId is required');
	} else if (!UUID_REGEX.test(String(body.rentalOrderId).trim())) {
		errors.push('rentalOrderId must be a valid UUID');
	}

	if (
		body.gearItemId === undefined ||
		body.gearItemId === null ||
		String(body.gearItemId).trim() === ''
	) {
		errors.push('gearItemId is required');
	} else if (!UUID_REGEX.test(String(body.gearItemId).trim())) {
		errors.push('gearItemId must be a valid UUID');
	}

	if (body.rating === undefined || body.rating === null) {
		errors.push('rating is required');
	} else {
		const rating = Number(body.rating);
		if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
			errors.push('rating must be an integer between 1 and 5');
		}
	}

	if (errors.length > 0) {
		throw new BadRequestError('Validation failed', errors);
	}

	return {
		rentalOrderId: String(body.rentalOrderId).trim(),
		gearItemId: String(body.gearItemId).trim(),
		rating: Number(body.rating),
		comment:
			body.comment !== undefined && body.comment !== null
				? String(body.comment).trim()
				: undefined,
	};
}

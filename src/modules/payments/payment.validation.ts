import { BadRequestError } from '@/errors';

const UUID_REGEX =
	/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export interface CreatePaymentBody {
	rentalOrderId: string;
}

export function validateCreatePaymentBody(
	body: Record<string, any>,
): CreatePaymentBody {
	const errors: string[] = [];

	if (!body.rentalOrderId || typeof body.rentalOrderId !== 'string') {
		errors.push('rentalOrderId is required');
	} else if (!UUID_REGEX.test(body.rentalOrderId)) {
		errors.push('rentalOrderId must be a valid UUID');
	}

	if (errors.length > 0) {
		throw new BadRequestError('Validation failed', errors);
	}

	return { rentalOrderId: body.rentalOrderId };
}

export interface ConfirmPaymentBody {
	transactionId: string;
}

export function validateConfirmPaymentBody(
	body: Record<string, any>,
): ConfirmPaymentBody {
	const errors: string[] = [];

	if (
		!body.transactionId ||
		typeof body.transactionId !== 'string' ||
		body.transactionId.trim().length === 0
	) {
		errors.push('transactionId is required');
	}

	if (errors.length > 0) {
		throw new BadRequestError('Validation failed', errors);
	}

	return { transactionId: body.transactionId.trim() };
}

export function validatePaymentIdParam(id: unknown): string {
	if (!id || typeof id !== 'string' || !UUID_REGEX.test(id)) {
		throw new BadRequestError('id must be a valid UUID');
	}
	return id;
}

import { AppError } from './app-error';

export class ForbiddenError extends AppError {
	constructor(message: string, errorDetails?: unknown) {
		super(403, message, errorDetails);
	}
}

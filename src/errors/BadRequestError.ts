import { AppError } from './app-error';

export class BadRequestError extends AppError {
	constructor(message: string, errorDetails?: unknown) {
		super(400, message, errorDetails);
	}
}

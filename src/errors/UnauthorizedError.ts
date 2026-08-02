import { AppError } from './app-error';

export class UnauthorizedError extends AppError {
	constructor(message: string, errorDetails?: unknown) {
		super(401, message, errorDetails);
	}
}

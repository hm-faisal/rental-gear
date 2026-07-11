import { AppError } from './app-error';

export class ConflictError extends AppError {
	constructor(message: string, errorDetails?: unknown) {
		super(409, message, errorDetails);
	}
}

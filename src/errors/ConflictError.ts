import AppError from '@/utils/app-error';

export class ConflictError extends AppError {
	constructor(message: string) {
		super(409, message);
	}
}

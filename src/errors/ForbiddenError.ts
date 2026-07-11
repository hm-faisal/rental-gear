import AppError from '@/utils/app-error';

export class ForbiddenError extends AppError {
	constructor(message: string) {
		super(403, message);
	}
}

export class AppError extends Error {
	public statusCode: number;
	public errorDetails: unknown;

	constructor(statusCode: number, message: string, errorDetails: unknown = null) {
		super(message);
		this.statusCode = statusCode;
		this.errorDetails = errorDetails;

		Error.captureStackTrace(this, this.constructor);
	}
}



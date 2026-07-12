import type { Request, Response } from 'express';
import catchAsync from '../../utils/catch-async';
import sendResponse from '../../utils/send-response';

const getHealth = catchAsync((_req: Request, res: Response) => {
	sendResponse(res, {
		statusCode: 200,
		success: true,
		message: 'Prisma press api server is running',
		data: null,
	});
});

export const healthController = {
	getHealth,
};

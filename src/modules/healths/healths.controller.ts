import catchAsync from '@/utils/catch-async';
import sendResponse from '@/utils/send-response';

const getHealth = catchAsync((_req, res) => {
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

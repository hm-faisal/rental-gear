import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { type Application, raw } from 'express';
import { env } from './config';
import { errorHandler } from './middlewares/error.middlewares';
import { paymentController } from './modules/payments/payment.controller';
import applicationRoutes from './routes';
import sendResponse from './utils/send-response';

const app: Application = express();

/*
 * Payments webhook routes
 */
app.post(
	'/api/payments/webhook',
	raw({ type: 'application/json' }),
	paymentController.webhook,
);

/*
 * Middlewares
 */
app.use(
	cors({
		origin: env.app_url,
		credentials: true,
	}),
);
app.use(express.json());
app.use(cookieParser());
/*
 * Routes
 */

// Root route
app.get('/', (_req, res) => {
	sendResponse(res, {
		success: true,
		statusCode: 200,
		message: 'Welcome to Rent gear',
		data: null,
	});
});

// Root route
app.get('/api/health', (_req, res) => {
	sendResponse(res, {
		success: true,
		statusCode: 200,
		message: 'Rent gear server is running',
		data: null,
	});
});

// Application routes
app.use('/api', applicationRoutes);

// Error handler middleware
app.use(errorHandler);

export default app;

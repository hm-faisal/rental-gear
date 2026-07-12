import fs from 'node:fs';
import path from 'node:path';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { type Application, raw } from 'express';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yaml';
import { env } from './config';
import { errorHandler } from './middlewares/error.middlewares';
import { paymentController } from './modules/payments/payment.controller';
import applicationRoutes from './routes';
import sendResponse from './utils/send-response';

const app: Application = express();

/*
 * Load OpenAPI spec
 */
let swaggerDocument: Record<string, unknown> | null = null;
try {
	const yamlPath = path.resolve(process.cwd(), 'gearup-openapi.yaml');
	if (fs.existsSync(yamlPath)) {
		const fileContent = fs.readFileSync(yamlPath, 'utf8');
		swaggerDocument = YAML.parse(fileContent) as Record<string, unknown>;
	} else {
		const ymlPath = path.resolve(process.cwd(), 'gearup-openapi.yml');
		if (fs.existsSync(ymlPath)) {
			const fileContent = fs.readFileSync(ymlPath, 'utf8');
			swaggerDocument = YAML.parse(fileContent) as Record<string, unknown>;
		}
	}
} catch (error) {
	console.error('Failed to load OpenAPI spec:', error);
}

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

// OpenAPI Documentation route
if (swaggerDocument) {
	app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}

// Root route
app.get('/', (_req, res) => {
	sendResponse(res, {
		statusCode: 200,
		success: true,
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

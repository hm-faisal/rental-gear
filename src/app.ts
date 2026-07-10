import fs from 'node:fs';
import path from 'node:path';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { type Application } from 'express';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yaml';
import { env } from './config';
import { errorHandler } from './middlewares/error.middlewares';
import applicationRoutes from './routes';

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
	res.status(200).json({
		message: 'Wellcome to prisma press',
	});
});

// Root route
app.get('/api/health', (_req, res) => {
	res.status(200).json({
		message: 'Prisma press server is running',
	});
});

// Application routes
app.use('/api', applicationRoutes);

// Error handler middleware
app.use(errorHandler);

export default app;

import { Router } from 'express';
import { authRoutes } from '@/modules/auth/auth.routes';
import { healthRoutes } from '@/modules/healths/healths.routes';

type Route = {
	path: string;
	router: Router;
};

const routes: Route[] = [
	{
		path: '/health',
		router: healthRoutes,
	},
	{
		path: '/auth',
		router: authRoutes,
	},
];

const router: Router = Router();

routes.forEach((route) => {
	router.use(route.path, route.router);
});

export default router;

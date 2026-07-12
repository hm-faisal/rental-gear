import { Router } from 'express';
import { adminRoutes } from '../modules/admin/admin.routes';
import { authRoutes } from '../modules/auth/auth.routes';
import { gearController } from '../modules/gear/gear.controller';
import { gearRoutes } from '../modules/gear/gear.routes';
import { healthRoutes } from '../modules/healths/healths.routes';
import { paymentRouter } from '../modules/payments/payment.routes';
import { providerRoutes } from '../modules/provider/provider.routes';
import { rentalRoutes } from '../modules/rental/rental.routes';
import { reviewRoutes } from '../modules/review/review.routes';

type Route = {
	path: string;
	router: Router;
};

const categoryRouter = Router();
categoryRouter.get('/', gearController.getCategories);

const routes: Route[] = [
	{
		path: '/health',
		router: healthRoutes,
	},
	{
		path: '/auth',
		router: authRoutes,
	},
	{
		path: '/gear',
		router: gearRoutes,
	},
	{
		path: '/categories',
		router: categoryRouter,
	},
	{
		path: '/provider',
		router: providerRoutes,
	},
	{
		path: '/admin',
		router: adminRoutes,
	},
	{
		path: '/rentals',
		router: rentalRoutes,
	},
	{
		path: '/reviews',
		router: reviewRoutes,
	},
	{
		path: '/payments',
		router: paymentRouter,
	},
];

const router: Router = Router();

routes.forEach((route) => {
	router.use(route.path, route.router);
});

export default router;

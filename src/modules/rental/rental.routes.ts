import { Router } from 'express';
import { auth } from '../../middlewares/auth.middleware.js';
import { rentalController } from './rental.controller.js';

const router = Router();

// Apply auth(['CUSTOMER']) middleware to all routes in this router
router.use(auth(['CUSTOMER']));

router.post('/', rentalController.createRental);
router.get('/', rentalController.getRentalOrders);
router.get('/:id', rentalController.getRentalOrderById);
router.patch('/:id/cancel', rentalController.cancelRentalOrder);

export const rentalRoutes: Router = router;

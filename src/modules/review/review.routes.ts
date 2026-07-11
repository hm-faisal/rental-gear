import { Router } from 'express';
import { auth } from '../../middlewares/auth.middleware.js';
import { reviewController } from './review.controller.js';

const router = Router();

// Apply auth(['CUSTOMER']) middleware to all routes in this router
router.use(auth(['CUSTOMER']));

router.post('/', reviewController.createReview);

export const reviewRoutes: Router = router;

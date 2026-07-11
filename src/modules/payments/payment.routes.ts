import { Router, raw } from 'express';
import { auth } from '../../middlewares/auth.middleware.js';
import { paymentController } from './payment.controller.js';

const router: Router = Router();

// IMPORTANT: Stripe requires the RAW request body (not JSON-parsed) to verify
// the webhook signature. This route must be mounted BEFORE your app applies
// a global express.json() middleware — see the app.ts note below.

// All other payment routes are for authenticated customers and can safely
// use normal JSON body parsing.
router.post('/create', auth(['CUSTOMER']), paymentController.create);
router.post('/confirm', auth(['CUSTOMER']), paymentController.confirm);
router.get('/', auth(['CUSTOMER']), paymentController.list);
router.get('/:id', auth(['CUSTOMER']), paymentController.getById);

export { router as paymentRouter };

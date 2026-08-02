import { Router } from 'express';
import { auth } from '../../middlewares/auth.middleware.js';
import { providerController } from './provider.controller.js';

const router = Router();

// Apply auth(['PROVIDER']) middleware to all routes in this router
router.use(auth(['PROVIDER']));

router.get('/gear', providerController.getMyGearItems);
router.post('/gear', providerController.addGearItem);
router.put('/gear/:id', providerController.updateGearItem);
router.delete('/gear/:id', providerController.deleteGearItem);

router.get('/orders', providerController.getIncomingOrders);
router.patch('/orders/:id', providerController.updateOrderStatus);

export const providerRoutes: Router = router;

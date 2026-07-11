import { Router } from 'express';
import { auth } from '../../middlewares/auth.middleware.js';
import { adminController } from './admin.controller.js';

const router = Router();

// Protect all admin routes with auth(['ADMIN'])
router.use(auth(['ADMIN']));

router.get('/users', adminController.getAllUsers);
router.patch('/users/:id', adminController.updateUserStatus);
router.get('/gear', adminController.getAllGears);
router.get('/rentals', adminController.getAllRentals);
router.post('/categories', adminController.createCategory);
router.put('/categories/:id', adminController.updateCategory);
router.delete('/categories/:id', adminController.deleteCategory);

export const adminRoutes: Router = router;

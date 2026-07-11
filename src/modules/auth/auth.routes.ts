import { Router } from 'express';
import { auth } from '../../middlewares/auth.middleware.js';
import { authController } from './auth.controller.js';

const router = Router();

router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser);
router.get('/me', auth(), authController.getMe);
router.patch('/me', auth(), authController.updateMe);
router.put('/me', auth(), authController.updateMe);

export const authRoutes: Router = router;

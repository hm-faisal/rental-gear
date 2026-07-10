import { Router } from 'express';
import { healthController } from './healths.controller';

const router: Router = Router();

router.get('/', healthController.getHealth);

export const healthRoutes = router;

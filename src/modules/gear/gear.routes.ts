import { Router } from 'express';
import { gearController } from './gear.controller';

const router: Router = Router();

router.get('/:id', gearController.getGearsById);
router.get('/', gearController.getGears);

export const gearRoutes = router;

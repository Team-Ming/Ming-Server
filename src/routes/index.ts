import { Router } from 'express';
import MiracleRouter from './MiracleRouter';

const router: Router = Router();

router.use('/miracle', MiracleRouter);

export default router;

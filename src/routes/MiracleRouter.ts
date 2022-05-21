import express, { Router } from 'express';
import { MiracleController } from '../controllers';

const router: Router = express.Router();

router.post('/', MiracleController.createMiracle);
router.get('/all', MiracleController.getAllMiracles);

export default router;

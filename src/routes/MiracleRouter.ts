import express, { Router } from 'express';
import { request } from 'http';
import { MiracleController } from '../controllers';

const router: Router = express.Router();

router.post('/', MiracleController.createMiracle);

router.get('/:userId/:_date', MiracleController.getMiracle);

export default router;

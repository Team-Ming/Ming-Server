import express, { Router } from 'express';
import { request } from 'http';
import { MiracleController } from '../controllers';

const router: Router = express.Router();

router.get('/:userId/:date', MiracleController.getMiracle);

export default router;

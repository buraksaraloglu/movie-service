import express from 'express';

import healthRouter from './health';
import movieRouter from './movie';

const router = express.Router();

router.use('v1/api/health', healthRouter);
router.use('/movie', movieRouter);

export default function initRouter(app: express.Application) {
  app.use(router);
}

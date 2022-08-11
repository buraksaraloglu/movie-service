import express from 'express';

import healthRouter from './health';
import movieRouter from './movie';

const router = express.Router();

// TODO: Could've implement a versioning scheme to allow for multiple versions of the API
router.use('/health', healthRouter);
router.use('/movie', movieRouter);

export default function initRouter(app: express.Application) {
  app.use(router);
}

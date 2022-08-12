import express from 'express';

import {
  getAllMoviesController,
  getMovieByIdController,
  createMovieController,
  updateMovieController,
} from '@/controllers/movie.controller';
import validateResource from '@/middleware/validateResource';
import {
  createMovieSchema,
  getMovieSchema,
  requireUserSchema,
  updateMovieSchema,
} from '@/schema/movie.schema';

const router = express.Router();

router.get('/', validateResource(requireUserSchema), getAllMoviesController);
router.get('/:id', validateResource(getMovieSchema), getMovieByIdController);
router.post(
  '/',
  validateResource(createMovieSchema),
  validateResource(requireUserSchema),
  createMovieController,
);
router.put(
  '/:id',
  validateResource(updateMovieSchema),
  validateResource(requireUserSchema),
  updateMovieController,
);

export default router;

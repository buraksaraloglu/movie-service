import { Request, Response } from 'express';

import {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
} from '@/service/movie.service';

const getUserIdFromRequest = (req: Request) => {
  const userId = Array.isArray(req.headers.user)
    ? req.headers.user[0]
    : req.headers.user;
  if (!userId) {
    throw new Error('[getUserIdFromRequest]: UserId is not set');
  }

  return userId;
};

export const getAllMoviesController = async (req: Request, res: Response) => {
  try {
    const userId = getUserIdFromRequest(req);
    const limit =
      typeof req.query.limit === 'string' ? parseInt(req.query.limit, 10) : 20;
    const skip =
      typeof req.query.skip === 'string' ? parseInt(req.query.skip, 10) : 0;

    if (limit > 1000) {
      throw new Error('[getAllMoviesController]: Limit is too high');
    }

    const movies = await getAllMovies(userId, { limit, skip });

    return res.status(200).send(movies);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

export const getMovieByIdController = async (req: Request, res: Response) => {
  try {
    const userId = getUserIdFromRequest(req);

    const movieId = req.params.id;
    if (!movieId) {
      res.status(400).send('Bad request');
    }

    const movie = await getMovieById({ userId, movieId });

    return res.status(200).send(movie);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export const createMovieController = async (req: Request, res: Response) => {
  try {
    const userId = getUserIdFromRequest(req);
    const newMovie = req.body;

    const movie = await createMovie({ userId, movie: newMovie });

    return res.status(200).send(movie);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export const updateMovieController = async (req: Request, res: Response) => {
  try {
    const userId = getUserIdFromRequest(req);
    const movieId = req.params.id;
    const newMovie = req.body;

    const movie = await updateMovie({ userId, movieId, movie: newMovie });

    return res.status(200).send(movie);
  } catch (error) {
    return res.status(400).send(error);
  }
};

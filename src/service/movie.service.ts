import { FilterQuery, UpdateQuery } from 'mongoose';

import MovieModel, {
  MovieDocument,
  MovieInput,
  UpdateMovieInput,
} from '@/models/Movie';

export const getAllMovies = async (
  userId: string,
  { limit, skip } = { limit: 20, skip: 0 },
): Promise<MovieDocument[]> => {
  const query: FilterQuery<MovieDocument> = {
    createdBy: userId,
  };
  const options: any = {
    limit,
    skip,
  };

  const movies = await MovieModel.find(query, null, options);

  return movies;
};

export const getMovieById = async ({
  userId,
  movieId,
}: {
  userId: string;
  movieId: string;
}): Promise<MovieDocument> => {
  const query: FilterQuery<MovieDocument> = {
    createdBy: userId,
    _id: movieId,
  };

  const movie = await MovieModel.findOne(query);

  return movie;
};

export const createMovie = async ({
  userId,
  movie,
}: {
  userId: string;
  movie: MovieInput;
}): Promise<MovieDocument> => {
  const newMovie = new MovieModel({
    ...movie,
    releaseDate: new Date(movie.releaseDate),
    createdBy: userId,
  });

  const res = await newMovie.save();

  return res;
};

export const updateMovie = async ({
  userId,
  movieId,
  movie,
}: {
  userId: string;
  movieId: string;
  movie: UpdateMovieInput;
}): Promise<MovieDocument> => {
  const query: FilterQuery<MovieDocument> = {
    createdBy: userId,
    _id: movieId,
  };

  const update: UpdateQuery<MovieInput> = {
    $set: {
      ...movie,
      releaseDate: movie.releaseDate ? new Date(movie.releaseDate) : undefined,
    },
  };

  const res = await MovieModel.findOneAndUpdate(query, update, {
    new: true,
  });

  return res;
};

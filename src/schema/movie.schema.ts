import { object, string } from 'zod';

export const requireUserSchema = object({
  headers: object({
    user: string({
      description: 'User id',
      required_error: 'user is required',
    }),
  }),
});

/**
 * @openapi
 * components:
 *  schemas:
 *    CreateMovieInput:
 *      type: object
 *      required:
 *        - name
 *        - releaseDate
 *      properties:
 *        name:
 *          type: string
 *          description: Titanic
 *        releaseDate:
 *          type: string
 *          description: 2022-01-01
 *    CreateMovieResponse:
 *      type: object
 *      properties:
 *        _id:
 *          type: string
 *        name:
 *          type: string
 *        releaseDate:
 *          type: string
 *        createdBy:
 *          type: string
 *        createdAt:
 *          type: string
 *        updatedAt:
 *          type: string
 */
export const createMovieSchema = object({
  body: object({
    name: string({
      description: 'Name of the movie',
      required_error: 'Name is required',
    }),
    releaseDate: string({
      required_error: 'Release Date is required',
      description: 'Release date of the movie',
    }),
  }),
});

export const updateMovieSchema = object({
  body: object({
    name: string({
      description: 'Name of the movie',
      required_error: 'Name is required',
    }).optional(),
    releaseDate: string({
      required_error: 'Release Date is required',
      description: 'Release date of the movie',
    }).optional(),
  }),
});

export const getMovieSchema = object({
  params: object({
    id: string({
      description: 'Movie id',
    }),
  }),
  headers: object({
    user: string({
      description: 'User id',
      required_error: 'user is required',
    }),
  }),
});

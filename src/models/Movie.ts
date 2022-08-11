import { Schema, model, Document } from 'mongoose';

export interface MovieInput {
  name: string;
  releaseDate: string;
}

export interface MovieDocument extends MovieInput, Document {
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
}

const movieSchema = new Schema(
  {
    name: { type: String, required: true },
    releaseDate: { type: Date, required: true },
    createdBy: { type: Schema.Types.ObjectId, required: true },
  },
  {
    timestamps: true,
  },
);

const MovieModel = model<MovieDocument>('Movie', movieSchema);

export default MovieModel;

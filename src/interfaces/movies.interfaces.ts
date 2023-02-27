import { DeepPartial, Repository } from "typeorm";
import { z } from "zod/lib";

import { Movie } from "../entities";
import { movieSchema, moviesManySchema, movieUpdateSchema, returnMovieSchema } from "../schemas/movieSchema";

export type IMovies = z.infer<typeof movieSchema>

export type iMovieRepo = Repository<Movie>

export type IMovieResponse = z.infer<typeof returnMovieSchema>
export type IMovieManyResponse = z.infer<typeof moviesManySchema>
export type IUpdateMovie = z.infer<typeof movieUpdateSchema>
export type IMovieUpdate = DeepPartial<IMovies>
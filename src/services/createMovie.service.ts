import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { IMovieResponse, IMovies } from "../interfaces";
import { iMovieRepo } from "../interfaces";
import { returnMovieSchema } from "../schemas";

export const createMovieService = async (movieData: IMovies): Promise<IMovieResponse> => {
    const moviesRepository: iMovieRepo = AppDataSource.getRepository(Movie)

    const newMovie: Movie = await moviesRepository.save(movieData)

    return returnMovieSchema.parse(newMovie)
}
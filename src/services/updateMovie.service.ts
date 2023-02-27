import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { AppError } from "../error";
import { iMovieRepo, IMovieResponse, IMovieUpdate, IUpdateMovie } from "../interfaces/movies.interfaces";
import { returnMovieSchema } from "../schemas";

export const updateMovieService = async (id: number, payload: IMovieUpdate): Promise<IMovieResponse> => {
    const movieRepository: iMovieRepo = AppDataSource.getRepository(Movie)
    
    const findMovie: Movie | null = await movieRepository.findOne({
        where: {
            id: id
        }
    })
    
    if(!findMovie) throw new AppError('Movie not found!', 404)

    const movie: Movie = await movieRepository.save({
        ...findMovie,
        ...payload
    })
    
    return returnMovieSchema.parse(movie)
}
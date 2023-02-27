import { AppDataSource } from "../data-source"
import { Movie } from "../entities"
import { iMovieRepo } from "../interfaces"

export const deleteMovieService = async (id: number): Promise<void> => {
    const movieRepository: iMovieRepo = AppDataSource.getRepository(Movie)
    
    const movie = await movieRepository.findOneBy({id})

    await movieRepository.remove(movie!)
}
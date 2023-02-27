import { number } from "zod";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { IMovieManyResponse, iMovieRepo } from "../interfaces";
import { moviesManySchema } from "../schemas";

export const listMoviesService = async (perPage: any, page: any, sort: any, order: any): Promise<IMovieManyResponse> => {
    const movieRepository: iMovieRepo = AppDataSource.getRepository(Movie)
    const baseUrl: string = "http://localhost:3000/movies"

    perPage === undefined || !parseInt(perPage) ? perPage = 5 : perPage
    page === undefined || !parseInt(page) ? page = 1 : page
    
    const take: number = perPage <= 0 || perPage > 5 ? 5 : parseInt(perPage)
    let skip: number = !page || page <= 0 ? 1 : parseInt(page)

    
    let sorts: string = sort !== "price" && sort !== "duration" ? "id" : sort
    order === undefined ? order = "ASC" : String(order)
    
    const orders: string = order.toUpperCase() !== "ASC" && order.toUpperCase() !== "DESC" || !sort ? "ASC" : order.toUpperCase()
    
    const movies: [Movie[], number] = await movieRepository.findAndCount({
        order: {
            [sorts]: orders 
        },
        take: take,  
        skip: take * (skip - 1)
    })
    
    const prevPage: string | null = skip === 1 ? null : `${baseUrl}?page=${skip - 1}&perPage=${take}`
    const nextPage: string | null = take * skip >= movies[1] ? null : `${baseUrl}?page=${skip + 1}&perPage=${take}`
    
    return moviesManySchema.parse({
        prevPage,
        nextPage,
        count: movies[1],
        data: movies[0]
    })
}
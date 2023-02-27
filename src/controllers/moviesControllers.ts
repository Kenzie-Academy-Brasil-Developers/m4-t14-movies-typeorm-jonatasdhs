import { Request, Response } from "express"
import { IMovieManyResponse, IMovieResponse, IMovieUpdate } from "../interfaces"
import { createMovieService, deleteMovieService, listMoviesService, updateMovieService } from "../services"

export const createMovieController = async (req: Request, res: Response): Promise<Response> => {
    const movieData: IMovieResponse = await createMovieService(req.body)

    return res.status(201).json(movieData)
}

export const deleteMovieController = async (req: Request, res: Response): Promise<Response> => {

    const id: number = parseInt(req.params.id)
    
    await deleteMovieService(id)

    return res.status(204).send()
}

export const listMoviesControllers = async (req: Request, res: Response): Promise<Response> => {
    const {perPage, page, sort, order} = req.query

    const movies: IMovieManyResponse = await listMoviesService(perPage, page, sort, order)

    return res.json(movies)
}

export const updateMovieController = async (req: Request, res: Response): Promise<Response> => {
    const id: number = parseInt(req.params.id)   
        
    const movieData: IMovieUpdate = req.body
    
    const updatedMovie: IMovieResponse = await updateMovieService(id, movieData)
    
    return res.status(200).json(updatedMovie)
}
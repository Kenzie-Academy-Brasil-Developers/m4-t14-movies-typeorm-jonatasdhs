import { NextFunction, Request, Response } from "express";

import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { AppError } from "../error";
import { iMovieRepo } from "../interfaces";

export const ensureMovieExistsMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const id: number = parseInt(req.params.id)

    const movieRepository: iMovieRepo = AppDataSource.getRepository(Movie)

    const movie = await movieRepository.findOneBy({id})

    if(!movie) throw new AppError("Movie not found", 404)

    next()
}

export const verifyMovieAlreadyExistsMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { name }: any = req.body
   
    if(name) {
        const movieRepository: iMovieRepo = AppDataSource.getRepository(Movie)
        const movie = await movieRepository.findOne({where: {name}})
        
        if(movie) throw new AppError("Movie already exists.", 409)
    }
    
    next()
}
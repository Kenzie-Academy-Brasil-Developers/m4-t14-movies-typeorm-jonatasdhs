import { NextFunction, Request, Response } from "express";
import { movieSchema, movieUpdateSchema } from "../schemas";

export const verifyBodyCreateMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const validated = movieSchema.parse(req.body)

    req.body = validated

    return next()
}

export const verifyBodyUpdateMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const validated = movieUpdateSchema.parse(req.body)

    req.body = validated
    
    return next()
}
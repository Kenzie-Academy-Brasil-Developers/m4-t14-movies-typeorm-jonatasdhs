import { Router } from "express";
import { createMovieController, deleteMovieController, listMoviesControllers, updateMovieController } from "../controllers/moviesControllers";
import { ensureMovieExistsMiddleware, verifyBodyCreateMiddleware, verifyBodyUpdateMiddleware, verifyMovieAlreadyExistsMiddleware } from "../middlewares";

export const moviesRouter: Router = Router()

moviesRouter.post('', verifyBodyCreateMiddleware, verifyMovieAlreadyExistsMiddleware, createMovieController)
moviesRouter.get('', listMoviesControllers)
moviesRouter.delete('/:id', ensureMovieExistsMiddleware, deleteMovieController)
moviesRouter.patch('/:id', verifyBodyUpdateMiddleware, ensureMovieExistsMiddleware, verifyMovieAlreadyExistsMiddleware, updateMovieController)
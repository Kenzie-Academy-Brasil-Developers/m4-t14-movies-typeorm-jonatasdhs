import { ensureMovieExistsMiddleware, verifyMovieAlreadyExistsMiddleware } from './ensureMovieExists.middlewares'
import {verifyBodyCreateMiddleware, verifyBodyUpdateMiddleware} from './verifyBody.middlewares'


export {verifyBodyCreateMiddleware, verifyBodyUpdateMiddleware, ensureMovieExistsMiddleware, verifyMovieAlreadyExistsMiddleware}
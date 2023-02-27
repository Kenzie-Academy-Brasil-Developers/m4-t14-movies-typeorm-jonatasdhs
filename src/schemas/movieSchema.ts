import { z } from 'zod'
export const movieSchema = z.object({
    name: z.string().max(50),
    description: z.string().optional().nullish(),
    duration: z.number().int().positive(),
    price: z.number().int().positive()
})

export const returnMovieSchema = movieSchema.extend({
    id: z.number()
})

export const movieUpdateSchema = movieSchema.partial()
export const moviesManySchema = z.object({
    prevPage: z.string().nullable(),
    nextPage: z.string().nullable(),
    count: z.number().int().positive(),
    data: z.array(returnMovieSchema)
})

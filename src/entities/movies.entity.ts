import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('movies')

export class Movie {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: '50', unique: true})
    name: string

    @Column({type: 'text', nullable: true})
    description?: string | null | undefined

    @Column()
    duration: number
    
    @Column()
    price: number
}
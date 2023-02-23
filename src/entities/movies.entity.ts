import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('movies')

export class Movies {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: '50', unique: true})
    name: string

    @Column({nullable: true})
    description: string

    @Column()
    duration: number
    
    @Column()
    price: number
}
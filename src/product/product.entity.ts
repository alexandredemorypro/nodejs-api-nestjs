import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    family: string;

    @Column('int')
    price_per_day: number;

    @Column('text')
    name: string;

    @Column({
        type: 'datetime',
        nullable: true,
    })
    createdDate: string;
}

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Rental {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('bigint')
    product_id: number;

    @Column({ type: 'datetime' })
    from: string;

    @Column({ type: 'datetime' })
    to: string;

    @Column({
        type: 'int',
        default: 0,
    })
    discount: number;
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';
import { Rental } from '../rental/rental.entity';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,
    ) { }

    getAvailabilities(rental: Rental) {
        return this.productRepository.createQueryBuilder('p')
            .select(['COUNT(p.id) as quantity', 'p.family'])
            .leftJoin(Rental, 'r', 'r.product_id = p.id')
            .where(':endAt <= r.from', { endAt: rental.to })
            .orWhere('r.to <= :startAt', { startAt: rental.from })
            .orWhere('r.to is null AND r.from is null')
            .groupBy('p.family')
            .getRawMany();
    }

    create(product: Product): Promise<Product> {
        return this.productRepository.save(product);
    }
}

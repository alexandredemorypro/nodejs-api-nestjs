import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rental } from './rental.entity';

@Injectable()
export class RentalService {
    constructor(
        @InjectRepository(Rental)
        private readonly rentalRepository: Repository<Rental>,
    ) { }

    get(): Promise<Rental[]> {
        return this.rentalRepository.find();
    }

    create(rental: Rental): Promise<Rental> {
        return this.rentalRepository.save(rental);
    }
}

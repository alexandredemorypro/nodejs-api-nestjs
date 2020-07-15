import { Controller, Post, Body, Get } from '@nestjs/common';
import { Rental } from './rental.entity';
import { RentalService } from './rental.service';

@Controller('rental')
export class RentalController {
    constructor(private readonly rentalService: RentalService) { }

    @Get()
    getRental(): Promise<Rental[]> {
        return this.rentalService.get();
    }

    @Post()
    createRental(@Body() rental: Rental): Promise<Rental> {
        return this.rentalService.create(rental);
    }
}

import { Controller, Post, Body, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Rental } from './rental.entity';
import { RentalService } from './rental.service';

@ApiTags('rental')
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

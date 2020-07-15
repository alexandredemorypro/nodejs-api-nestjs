import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProductService } from './product.service';
import { Product } from './product.entity';
import { Rental } from '../rental/rental.entity';

@ApiTags('product')
@Controller()
export class ProductController {
    constructor(private readonly productService: ProductService) { }

    @Post('availability')
    getAvailabilities(@Body() rental: Rental) {
        return this.productService.getAvailabilities(rental);
    }

    @Post('product')
    createProduct(@Body() product: Product): Promise<Product> {
        return this.productService.create(product);
    }
}

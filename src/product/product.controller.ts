import { Controller, Post, Body, Get } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) { }

    @Post('availability')
    getAvailabilities(@Body() body): string {
        return this.productService.getAvailabilities();
    }
}

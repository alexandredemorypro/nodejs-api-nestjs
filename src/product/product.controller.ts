import { Controller, Post, Body } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.entity';

@Controller()
export class ProductController {
    constructor(private readonly productService: ProductService) { }

    @Post('availability')
    getAvailabilities(): Promise<Product[]> {
        return this.productService.getAvailabilities();
    }

    @Post('product')
    createProduct(@Body() product: Product): Promise<Product> {
        return this.productService.create(product);
    }
}

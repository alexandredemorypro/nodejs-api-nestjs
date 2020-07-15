import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './product/product.module';
import { RentalModule } from './rental/rental.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    ProductModule,
    RentalModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

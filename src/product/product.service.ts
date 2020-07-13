import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
    getAvailabilities(): string {
        throw new Error("Method not implemented.");
    }
}

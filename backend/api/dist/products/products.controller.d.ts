import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
export declare class ProductsController {
    private service;
    constructor(service: ProductsService);
    create(dto: CreateProductDto): any;
    findAll(): any;
    findOne(id: number): any;
}

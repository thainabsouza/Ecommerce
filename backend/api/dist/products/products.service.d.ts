import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
export declare class ProductsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateProductDto): any;
    findAll(): any;
    findOne(id: number): any;
    update(id: number, data: Partial<CreateProductDto>): any;
    remove(id: number): any;
}

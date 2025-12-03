import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
export declare class ProductsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateProductDto): import("@prisma/client").Prisma.Prisma__ProductClient<{
        title: string;
        description: string | null;
        price: number;
        imageUrl: string | null;
        imgUrl1: string | null;
        imgUrl2: string | null;
        imgUrl3: string | null;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        title: string;
        description: string | null;
        price: number;
        imageUrl: string | null;
        imgUrl1: string | null;
        imgUrl2: string | null;
        imgUrl3: string | null;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }[]>;
    findOne(id: number): import("@prisma/client").Prisma.Prisma__ProductClient<{
        title: string;
        description: string | null;
        price: number;
        imageUrl: string | null;
        imgUrl1: string | null;
        imgUrl2: string | null;
        imgUrl3: string | null;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: number, data: Partial<CreateProductDto>): import("@prisma/client").Prisma.Prisma__ProductClient<{
        title: string;
        description: string | null;
        price: number;
        imageUrl: string | null;
        imgUrl1: string | null;
        imgUrl2: string | null;
        imgUrl3: string | null;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: number): import("@prisma/client").Prisma.Prisma__ProductClient<{
        title: string;
        description: string | null;
        price: number;
        imageUrl: string | null;
        imgUrl1: string | null;
        imgUrl2: string | null;
        imgUrl3: string | null;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}

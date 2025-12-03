import { PrismaService } from '../prisma/prisma.service';
export declare class MenuCardsService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        title: string;
        imageUrl: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }[]>;
}

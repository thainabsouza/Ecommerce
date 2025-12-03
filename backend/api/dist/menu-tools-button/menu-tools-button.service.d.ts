import { PrismaService } from '../prisma/prisma.service';
export declare class MenuToolsButtonService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        title: string;
        imageUrl: string;
        createdAt: Date | null;
        updatedAt: Date | null;
        id: number;
    }[]>;
    create(data: {
        title: string;
        imageUrl: string;
    }): import("@prisma/client").Prisma.Prisma__MenuToolsButtonClient<{
        title: string;
        imageUrl: string;
        createdAt: Date | null;
        updatedAt: Date | null;
        id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}

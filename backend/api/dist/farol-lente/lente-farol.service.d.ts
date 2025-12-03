import { PrismaService } from 'src/prisma/prisma.service';
export declare class LenteFarolService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        title: string;
        description: string | null;
        price: number;
        imageUrl: string | null;
        imgUrl1: string | null;
        imgUrl2: string | null;
        imgUrl3: string | null;
        id: number;
        createdat: Date | null;
        updatedat: Date | null;
    }[]>;
    create(data: any): import("@prisma/client").Prisma.Prisma__LenteFarolClient<{
        title: string;
        description: string | null;
        price: number;
        imageUrl: string | null;
        imgUrl1: string | null;
        imgUrl2: string | null;
        imgUrl3: string | null;
        id: number;
        createdat: Date | null;
        updatedat: Date | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findOne(id: number): import("@prisma/client").Prisma.Prisma__LenteFarolClient<{
        title: string;
        description: string | null;
        price: number;
        imageUrl: string | null;
        imgUrl1: string | null;
        imgUrl2: string | null;
        imgUrl3: string | null;
        id: number;
        createdat: Date | null;
        updatedat: Date | null;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}

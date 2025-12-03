import { CarcacaFarolService } from './carcaca-farol.service';
export declare class CarcacaFarolController {
    private service;
    constructor(service: CarcacaFarolService);
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
    findOne(id: string): import("@prisma/client").Prisma.Prisma__CarcacaFarolClient<{
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

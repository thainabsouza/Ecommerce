import { MenuCardsService } from './menu-cards.service';
export declare class MenuCardsController {
    private readonly service;
    constructor(service: MenuCardsService);
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        title: string;
        imageUrl: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }[]>;
}

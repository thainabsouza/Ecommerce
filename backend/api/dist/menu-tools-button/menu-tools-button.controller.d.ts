import { MenuToolsButtonService } from './menu-tools-button.service';
export declare class MenuToolsButtonController {
    private readonly service;
    constructor(service: MenuToolsButtonService);
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        title: string;
        imageUrl: string;
        createdAt: Date | null;
        updatedAt: Date | null;
        id: number;
    }[]>;
    create(body: {
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

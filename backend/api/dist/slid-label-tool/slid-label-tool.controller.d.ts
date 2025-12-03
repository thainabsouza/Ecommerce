import { SlidLabelToolService } from './slid-label-tool.service';
export declare class SlidLabelToolController {
    private readonly service;
    constructor(service: SlidLabelToolService);
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
    }): import("@prisma/client").Prisma.Prisma__SlidlabelToolClient<{
        title: string;
        imageUrl: string;
        createdAt: Date | null;
        updatedAt: Date | null;
        id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}

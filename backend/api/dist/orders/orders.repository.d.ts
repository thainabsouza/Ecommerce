import { PrismaService } from '../prisma/prisma.service';
export declare class PrismaOrdersRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: any): Promise<{
        items: {
            title: string;
            price: import("@prisma/client/runtime/library").Decimal;
            id: number;
            orderId: number;
            productId: number | null;
        }[];
    } & {
        createdAt: Date;
        updatedAt: Date;
        id: number;
        total: import("@prisma/client/runtime/library").Decimal;
        email: string;
        paymentmethod: string;
        paymentstatus: string;
    }>;
    findAll(): Promise<({
        items: {
            title: string;
            price: import("@prisma/client/runtime/library").Decimal;
            id: number;
            orderId: number;
            productId: number | null;
        }[];
    } & {
        createdAt: Date;
        updatedAt: Date;
        id: number;
        total: import("@prisma/client/runtime/library").Decimal;
        email: string;
        paymentmethod: string;
        paymentstatus: string;
    })[]>;
}

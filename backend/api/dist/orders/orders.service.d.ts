import type { IOrdersRepository } from './orders.repository.interface';
import { CreateOrderDto } from './dto/create-order.dto';
export declare class OrdersService {
    private readonly ordersRepo;
    constructor(ordersRepo: IOrdersRepository);
    createOrder(createOrderDto: CreateOrderDto): Promise<any>;
    findAll(): Promise<any>;
}

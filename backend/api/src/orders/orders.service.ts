import { Inject, Injectable, BadRequestException } from '@nestjs/common';
import type { IOrdersRepository } from './orders.repository.interface'; // ✅ import type
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrdersService {
  constructor(
    @Inject('IOrdersRepository')
    private readonly ordersRepo: IOrdersRepository, // agora ok
  ) {}

  async createOrder(createOrderDto: CreateOrderDto) {
    const { email, items, total, paymentMethod, paymentStatus } = createOrderDto;

    if (!email) {
      throw new BadRequestException('E-mail é obrigatório.');
    }

    if (!items || items.length === 0) {
      throw new BadRequestException('O pedido deve conter pelo menos 1 item.');
    }

    const formattedData = {
      email,
      total,
      paymentMethod,
      paymentStatus,
      items: {
        create: items.map(item => ({
          productId: Number(item.id),
          title: item.title,
          price: item.price,
        })),
      },
    };

    return this.ordersRepo.create(formattedData);
  }

  async findAll() {
    return this.ordersRepo.findAll();
  }
}

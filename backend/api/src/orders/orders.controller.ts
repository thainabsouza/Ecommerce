import { Controller, Post, Body, Get, InternalServerErrorException } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  async createOrder(@Body() createOrderDto: CreateOrderDto) {
    try {
      const order = await this.ordersService.createOrder(createOrderDto);
      return order;
    } catch (err) {
      console.error('Erro ao criar pedido:', err);
      throw new InternalServerErrorException('Erro ao criar pedido');
    }
  }

  @Get()
  async findAll() {
    return this.ordersService.findAll();
  }
}

import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaOrdersRepository } from './orders.repository';

@Module({
  controllers: [OrdersController],
  providers: [
    OrdersService,
    PrismaService,
    {
      provide: 'IOrdersRepository',
      useClass: PrismaOrdersRepository,
    },
  ],
})
export class OrdersModule {}

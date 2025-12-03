import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PrismaOrdersRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: any) {
    return this.prisma.order.create({
      data,
      include: { items: true },
    });
  }

  async findAll() {
    return this.prisma.order.findMany({
      orderBy: { createdAt: 'desc' },
      include: { items: true },
    });
  }
}

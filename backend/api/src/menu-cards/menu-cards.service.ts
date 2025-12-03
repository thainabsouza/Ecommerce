import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MenuCardsService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.menuCard.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }
}

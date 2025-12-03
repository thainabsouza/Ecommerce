import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MenuToolsButtonService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.menuToolsButton.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  create(data: { title: string; imageUrl: string; }) {
    return this.prisma.menuToolsButton.create({ data });
  }

}

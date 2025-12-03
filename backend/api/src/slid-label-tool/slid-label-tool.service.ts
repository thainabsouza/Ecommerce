import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SlidLabelToolService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.slidlabelTool.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  create(data: { title: string; imageUrl: string; }) {
    return this.prisma.slidlabelTool.create({ data });
  }

}

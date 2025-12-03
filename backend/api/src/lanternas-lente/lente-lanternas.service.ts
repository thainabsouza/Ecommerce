import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateLenteLanternaDto } from './dto/create-lente-lanterna.dto';

@Injectable()
export class LenteLanternasService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.lenteLanterna.findMany();
  }

  create(data: any) {
    return this.prisma.lenteLanterna.create({ data });
  }
  findOne(id: number) {
    return this.prisma.lenteLanterna.findUnique({
      where: { id },
    });

    }
}
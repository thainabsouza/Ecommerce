import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateLanternaDto } from './dto/create-lanterna.dto';

@Injectable()
export class LanternasService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.lanterna.findMany();
  }

  create(data: any) {
    return this.prisma.lanterna.create({ data });
  }
  findOne(id: number) {
    return this.prisma.lanterna.findUnique({
      where: { id },
    });

    }
}
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateLenteFarolDto } from './dto/create-lente-farol.dto';

@Injectable()
export class LenteFarolService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.lenteFarol.findMany();
  }

  create(data: any) {
    return this.prisma.lenteFarol.create({ data });
  }
  findOne(id: number) {
    return this.prisma.lenteFarol.findUnique({
      where: { id },
    });

    }
}
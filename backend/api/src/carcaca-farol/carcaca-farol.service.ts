import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCarcacaFarolDto } from './dto/create-carcaca-farol.dto';

@Injectable()
export class CarcacaFarolService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.carcacaFarol.findMany();
  }

  create(data: any) {
    return this.prisma.carcacaFarol.create({ data });
  }
  findOne(id: number) {
    return this.prisma.carcacaFarol.findUnique({
      where: { id },
    });

    }
}
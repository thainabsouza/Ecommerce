import { Module } from '@nestjs/common';
import { LenteLanternasController } from './lente-lanternas.controller';
import { LenteLanternasService } from './lente-lanternas.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [LenteLanternasController],
  providers: [LenteLanternasService, PrismaService],
  exports: [LenteLanternasService], // 👈 importante
})
export class LenteLanternasModule {}

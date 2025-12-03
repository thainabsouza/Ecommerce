import { Module } from '@nestjs/common';
import { LanternasController } from './lanternas.controller';
import { LanternasService } from './lanternas.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [LanternasController],
  providers: [LanternasService, PrismaService],
  exports: [LanternasService], // 👈 importante
})
export class LanternasModule {}

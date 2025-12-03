import { Module } from '@nestjs/common';
import { LenteFarolController } from './lente-farol.controller';
import { LenteFarolService } from './lente-farol.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [LenteFarolController],
  providers: [LenteFarolService, PrismaService],
  exports: [LenteFarolService], // 👈 importante
})
export class LenteFarolModule {}

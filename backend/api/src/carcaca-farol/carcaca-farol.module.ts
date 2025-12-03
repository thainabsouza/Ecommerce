import { Module } from '@nestjs/common';
import { CarcacaFarolController,  } from './carcaca-farol.controller';
import { CarcacaFarolService } from './carcaca-farol.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [CarcacaFarolController],
  providers: [CarcacaFarolService, PrismaService],
  exports: [CarcacaFarolService], // 👈 importante
})
export class CarcacaFarolModule {}

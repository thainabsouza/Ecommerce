import { Module } from '@nestjs/common';
import { MenuCardsService } from './menu-cards.service';
import { MenuCardsController } from './menu-cards.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [MenuCardsController],
  providers: [MenuCardsService, PrismaService],
})
export class MenuCardsModule {}

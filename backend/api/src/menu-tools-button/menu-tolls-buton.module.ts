import { Module } from '@nestjs/common';
import { MenuToolsButtonService } from './menu-tools-button.service';
import { MenuToolsButtonController } from './menu-tools-button.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [MenuToolsButtonController],
  providers: [ MenuToolsButtonService, PrismaService],
})
export class MenuToolsButtonModule {}

import { Module } from '@nestjs/common';
import { SlidLabelToolService} from './slid-label-tool.service';
import { SlidLabelToolController} from './slid-label-tool.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [SlidLabelToolController],
  providers: [ SlidLabelToolService, PrismaService],
})
export class SlidLabelToolModule {}

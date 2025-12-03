import { Controller, Get, Post, Body } from '@nestjs/common';
import { SlidLabelToolService } from './slid-label-tool.service';

@Controller('slid-label-tool') // <== caminho do endpoint
export class SlidLabelToolController {
  constructor(private readonly service: SlidLabelToolService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }
   @Post()
  create(@Body() body: { title: string; imageUrl: string; }) {
    return this.service.create(body);
  }
}

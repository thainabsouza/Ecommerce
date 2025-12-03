import { Controller, Get, Post, Body } from '@nestjs/common';
import { MenuToolsButtonService } from './menu-tools-button.service';

@Controller('menu-tools-button') // <== caminho do endpoint
export class MenuToolsButtonController {
  constructor(private readonly service: MenuToolsButtonService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }
   @Post()
  create(@Body() body: { title: string; imageUrl: string; }) {
    return this.service.create(body);
  }
}

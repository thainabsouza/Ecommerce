import { Controller, Get } from '@nestjs/common';
import { MenuCardsService } from './menu-cards.service';

@Controller('menu-cards') // <== caminho do endpoint
export class MenuCardsController {
  constructor(private readonly service: MenuCardsService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }
}

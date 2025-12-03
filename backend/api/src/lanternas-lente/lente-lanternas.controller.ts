import { Controller, Get, Param } from '@nestjs/common';
import { LenteLanternasService } from './lente-lanternas.service'; 

@Controller('lenteLanterna')
export class LenteLanternasController {
  constructor(private service: LenteLanternasService) {} // <-- 'service' aqui

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id); // <-- usa 'service', não 'lanternasService'
  }
}

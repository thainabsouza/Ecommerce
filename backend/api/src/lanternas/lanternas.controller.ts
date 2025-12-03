import { Controller, Get, Param } from '@nestjs/common';
import { LanternasService } from './lanternas.service'; 

@Controller('lanternas')
export class LanternasController {
  constructor(private service: LanternasService) {} // <-- 'service' aqui

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id); // <-- usa 'service', não 'lanternasService'
  }
}

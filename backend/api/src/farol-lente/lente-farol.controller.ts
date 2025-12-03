import { Controller, Get, Param } from '@nestjs/common';
import { LenteFarolService } from './lente-farol.service'; 

@Controller('lentefarol')
export class LenteFarolController {
  constructor(private service: LenteFarolService) {} // <-- 'service' aqui

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id); // <-- usa 'service', não 'lanternasService'
  }
}

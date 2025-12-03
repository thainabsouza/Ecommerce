import { Controller, Get, Param } from '@nestjs/common';
import { CarcacaFarolService } from './carcaca-farol.service'; 

@Controller('carcacafarol')
export class CarcacaFarolController {
  constructor(private service: CarcacaFarolService) {} // <-- 'service' aqui

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id); // <-- usa 'service', não 'lanternasService'
  }
}

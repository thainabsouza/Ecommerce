/*import { Controller, Post, Body } from '@nestjs/common';
import { PaymentsService } from './payments.service';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post('pix')
  async createPix(@Body() body: { total: number; description: string }) {
    return this.paymentsService.createPixPayment(body.total, body.description);
  }
}
*/

import { Controller, Post, Body } from '@nestjs/common';
import axios from 'axios';
import { randomUUID } from 'crypto';

@Controller('payments')
export class PaymentsController {
  @Post('pix')
  async createPix(@Body() body: { total: number; description: string }) {
    try {
      const { total, description } = body;

      const res = await axios.post(
        'https://api.mercadopago.com/v1/payments',
        {
          transaction_amount: total,
          description,
          payment_method_id: 'pix',
          payer: {
            email: 'cliente@email.com',
          },
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.MP_ACCESS_TOKEN}`,
            'X-Idempotency-Key': randomUUID(), // 🔥 obrigatório
          },
        },
      );

      return res.data;
    } catch (error) {
      console.error('Erro ao criar pagamento Pix:', error.response?.data || error);
      throw error;
    }
  }
}

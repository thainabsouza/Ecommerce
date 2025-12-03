import { Injectable, InternalServerErrorException } from '@nestjs/common';
import axios from 'axios';
import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class PaymentsService {
  async createPixPayment(total: number, description: string) {
    const url = 'https://api.mercadopago.com/v1/payments';

    const body = {
      transaction_amount: total,
      description,
      payment_method_id: 'pix',
      payer: {
        email: 'cliente@teste.com',
      },
    };

    const headers = {
      Authorization: `Bearer ${process.env.MERCADO_PAGO_ACCESS_TOKEN}`,
      'Content-Type': 'application/json',
    };

    try {
      const response = await axios.post(url, body, { headers });
      return {
        qrCodeBase64: response.data.point_of_interaction.transaction_data.qr_code_base64,
        qrCodeText: response.data.point_of_interaction.transaction_data.qr_code,
        status: response.data.status,
        id: response.data.id,
      };
    } catch (error) {
      console.error('Erro ao criar pagamento Pix:', error.response?.data || error.message);
      throw new InternalServerErrorException('Erro ao criar pagamento Pix');
    }
  }
}

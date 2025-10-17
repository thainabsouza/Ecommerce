import { PrismaClient } from '@prisma/client';
import * as dotenv from 'dotenv';
import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';

dotenv.config({ path: __dirname + '/../../.env' }); // 👈 caminho manual

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}

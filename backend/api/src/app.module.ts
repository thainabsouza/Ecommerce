import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { PaymentsModule } from './payments/payments.module';
import { MenuCardsModule } from './menu-cards/menu-cards.module';
import { MenuToolsButtonModule } from './menu-tools-button/menu-tolls-buton.module';
import { SlidLabelToolModule } from './slid-label-tool/slid-label-tool.module';
import { OrdersModule } from './orders/orders.module';
import { LanternasModule } from './lanternas/lanternas.module'; // 👈 import correto
import { LenteLanternasModule } from './lanternas-lente/lente-lanternas.module';
import { LenteFarolModule} from './farol-lente/lente-farol.module'
import { CarcacaFarolModule} from './carcaca-farol/carcaca-farol.module'
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    PrismaModule,
    ProductsModule,
    PaymentsModule,
    MenuCardsModule,
    MenuToolsButtonModule,
    SlidLabelToolModule,
    OrdersModule,
    LanternasModule, // 👈 importante
    LenteLanternasModule,
    LenteFarolModule,
    CarcacaFarolModule
  ],
  controllers: [
    AppController,
    
  ],
  providers: [AppService],
})
export class AppModule {}

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const products_module_1 = require("./products/products.module");
const payments_module_1 = require("./payments/payments.module");
const menu_cards_module_1 = require("./menu-cards/menu-cards.module");
const menu_tolls_buton_module_1 = require("./menu-tools-button/menu-tolls-buton.module");
const slid_label_tool_module_1 = require("./slid-label-tool/slid-label-tool.module");
const orders_module_1 = require("./orders/orders.module");
const lanternas_module_1 = require("./lanternas/lanternas.module");
const lente_lanternas_module_1 = require("./lanternas-lente/lente-lanternas.module");
const lente_farol_module_1 = require("./farol-lente/lente-farol.module");
const carcaca_farol_module_1 = require("./carcaca-farol/carcaca-farol.module");
const prisma_module_1 = require("./prisma/prisma.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            prisma_module_1.PrismaModule,
            products_module_1.ProductsModule,
            payments_module_1.PaymentsModule,
            menu_cards_module_1.MenuCardsModule,
            menu_tolls_buton_module_1.MenuToolsButtonModule,
            slid_label_tool_module_1.SlidLabelToolModule,
            orders_module_1.OrdersModule,
            lanternas_module_1.LanternasModule,
            lente_lanternas_module_1.LenteLanternasModule,
            lente_farol_module_1.LenteFarolModule,
            carcaca_farol_module_1.CarcacaFarolModule
        ],
        controllers: [
            app_controller_1.AppController,
        ],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map
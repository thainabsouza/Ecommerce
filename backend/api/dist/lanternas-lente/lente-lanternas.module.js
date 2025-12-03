"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LenteLanternasModule = void 0;
const common_1 = require("@nestjs/common");
const lente_lanternas_controller_1 = require("./lente-lanternas.controller");
const lente_lanternas_service_1 = require("./lente-lanternas.service");
const prisma_service_1 = require("../prisma/prisma.service");
let LenteLanternasModule = class LenteLanternasModule {
};
exports.LenteLanternasModule = LenteLanternasModule;
exports.LenteLanternasModule = LenteLanternasModule = __decorate([
    (0, common_1.Module)({
        controllers: [lente_lanternas_controller_1.LenteLanternasController],
        providers: [lente_lanternas_service_1.LenteLanternasService, prisma_service_1.PrismaService],
        exports: [lente_lanternas_service_1.LenteLanternasService],
    })
], LenteLanternasModule);
//# sourceMappingURL=lente-lanternas.module.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarcacaFarolModule = void 0;
const common_1 = require("@nestjs/common");
const carcaca_farol_controller_1 = require("./carcaca-farol.controller");
const carcaca_farol_service_1 = require("./carcaca-farol.service");
const prisma_service_1 = require("../prisma/prisma.service");
let CarcacaFarolModule = class CarcacaFarolModule {
};
exports.CarcacaFarolModule = CarcacaFarolModule;
exports.CarcacaFarolModule = CarcacaFarolModule = __decorate([
    (0, common_1.Module)({
        controllers: [carcaca_farol_controller_1.CarcacaFarolController],
        providers: [carcaca_farol_service_1.CarcacaFarolService, prisma_service_1.PrismaService],
        exports: [carcaca_farol_service_1.CarcacaFarolService],
    })
], CarcacaFarolModule);
//# sourceMappingURL=carcaca-farol.module.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuToolsButtonModule = void 0;
const common_1 = require("@nestjs/common");
const menu_tools_button_service_1 = require("./menu-tools-button.service");
const menu_tools_button_controller_1 = require("./menu-tools-button.controller");
const prisma_service_1 = require("../prisma/prisma.service");
let MenuToolsButtonModule = class MenuToolsButtonModule {
};
exports.MenuToolsButtonModule = MenuToolsButtonModule;
exports.MenuToolsButtonModule = MenuToolsButtonModule = __decorate([
    (0, common_1.Module)({
        controllers: [menu_tools_button_controller_1.MenuToolsButtonController],
        providers: [menu_tools_button_service_1.MenuToolsButtonService, prisma_service_1.PrismaService],
    })
], MenuToolsButtonModule);
//# sourceMappingURL=menu-tolls-buton.module.js.map
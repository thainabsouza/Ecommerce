"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuToolsButtonController = void 0;
const common_1 = require("@nestjs/common");
const menu_tools_button_service_1 = require("./menu-tools-button.service");
let MenuToolsButtonController = class MenuToolsButtonController {
    service;
    constructor(service) {
        this.service = service;
    }
    findAll() {
        return this.service.findAll();
    }
    create(body) {
        return this.service.create(body);
    }
};
exports.MenuToolsButtonController = MenuToolsButtonController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MenuToolsButtonController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MenuToolsButtonController.prototype, "create", null);
exports.MenuToolsButtonController = MenuToolsButtonController = __decorate([
    (0, common_1.Controller)('menu-tools-button'),
    __metadata("design:paramtypes", [menu_tools_button_service_1.MenuToolsButtonService])
], MenuToolsButtonController);
//# sourceMappingURL=menu-tools-button.controller.js.map
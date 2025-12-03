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
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
let OrdersService = class OrdersService {
    ordersRepo;
    constructor(ordersRepo) {
        this.ordersRepo = ordersRepo;
    }
    async createOrder(createOrderDto) {
        const { email, items, total, paymentMethod, paymentStatus } = createOrderDto;
        if (!email) {
            throw new common_1.BadRequestException('E-mail é obrigatório.');
        }
        if (!items || items.length === 0) {
            throw new common_1.BadRequestException('O pedido deve conter pelo menos 1 item.');
        }
        const formattedData = {
            email,
            total,
            paymentMethod,
            paymentStatus,
            items: {
                create: items.map(item => ({
                    productId: Number(item.id),
                    title: item.title,
                    price: item.price,
                })),
            },
        };
        return this.ordersRepo.create(formattedData);
    }
    async findAll() {
        return this.ordersRepo.findAll();
    }
};
exports.OrdersService = OrdersService;
exports.OrdersService = OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('IOrdersRepository')),
    __metadata("design:paramtypes", [Object])
], OrdersService);
//# sourceMappingURL=orders.service.js.map
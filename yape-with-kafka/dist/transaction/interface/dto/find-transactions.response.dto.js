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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindTransactionsResponseDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const find_transactions_result_1 = require("../../application/query/find-transactions.result");
class FindTransactionsItem extends find_transactions_result_1.ItemInFindTransactionsResult {
}
__decorate([
    (0, swagger_1.ApiProperty)({ format: 'uuid' }),
    __metadata("design:type", String)
], FindTransactionsItem.prototype, "transactionId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 100 }),
    __metadata("design:type", Number)
], FindTransactionsItem.prototype, "transactionType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 100 }),
    __metadata("design:type", Number)
], FindTransactionsItem.prototype, "transactionAccount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 100 }),
    __metadata("design:type", Number)
], FindTransactionsItem.prototype, "transactionAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 100 }),
    __metadata("design:type", Number)
], FindTransactionsItem.prototype, "transactionStatus", void 0);
class FindTransactionsResponseDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: [FindTransactionsItem] }),
    __metadata("design:type", find_transactions_result_1.FindTransactionsResult)
], FindTransactionsResponseDTO.prototype, "transactions", void 0);
exports.FindTransactionsResponseDTO = FindTransactionsResponseDTO;
//# sourceMappingURL=find-transactions.response.dto.js.map
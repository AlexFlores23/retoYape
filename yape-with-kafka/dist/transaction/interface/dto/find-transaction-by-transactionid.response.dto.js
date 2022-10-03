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
exports.FindTransactionByTransactionIdResponseDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const find_transaction_by_transactionid_result_1 = require("../../application/query/find-transaction-by-transactionid.result");
class FindTransactionByTransactionIdResponseDTO extends find_transaction_by_transactionid_result_1.FindTransactionByTransactionIdResult {
}
__decorate([
    (0, swagger_1.ApiProperty)({ format: 'uuid' }),
    __metadata("design:type", String)
], FindTransactionByTransactionIdResponseDTO.prototype, "transactionId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 100 }),
    __metadata("design:type", Number)
], FindTransactionByTransactionIdResponseDTO.prototype, "transactionType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 100 }),
    __metadata("design:type", Number)
], FindTransactionByTransactionIdResponseDTO.prototype, "transactionAccount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 100 }),
    __metadata("design:type", Number)
], FindTransactionByTransactionIdResponseDTO.prototype, "transactionAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 100 }),
    __metadata("design:type", Number)
], FindTransactionByTransactionIdResponseDTO.prototype, "transactionStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], FindTransactionByTransactionIdResponseDTO.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], FindTransactionByTransactionIdResponseDTO.prototype, "updatedAt", void 0);
exports.FindTransactionByTransactionIdResponseDTO = FindTransactionByTransactionIdResponseDTO;
//# sourceMappingURL=find-transaction-by-transactionid.response.dto.js.map
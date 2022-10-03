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
exports.FindAccountByIdResponseDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const find_account_by_id_result_1 = require("../../application/query/find-account-by-id.result");
class FindAccountByIdResponseDTO extends find_account_by_id_result_1.FindAccountByIdResult {
}
__decorate([
    (0, swagger_1.ApiProperty)({ format: 'uuid' }),
    __metadata("design:type", String)
], FindAccountByIdResponseDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'young' }),
    __metadata("design:type", String)
], FindAccountByIdResponseDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 100 }),
    __metadata("design:type", Number)
], FindAccountByIdResponseDTO.prototype, "balance", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], FindAccountByIdResponseDTO.prototype, "openedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], FindAccountByIdResponseDTO.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ nullable: true, required: false, example: null }),
    __metadata("design:type", Object)
], FindAccountByIdResponseDTO.prototype, "closedAt", void 0);
exports.FindAccountByIdResponseDTO = FindAccountByIdResponseDTO;
//# sourceMappingURL=find-account-by-id.response.dto.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionQueryImplement = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const transaction_entity_1 = require("../entity/transaction.entity");
let TransactionQueryImplement = class TransactionQueryImplement {
    async findByTransactionId(id) {
        return this.convertTransactionFromEntity(await (0, typeorm_1.getRepository)(transaction_entity_1.TransactionEntity).findOne(id));
    }
    async find(offset, limit) {
        return this.convertTransactionsFromEntities(await (0, typeorm_1.getRepository)(transaction_entity_1.TransactionEntity).find({ skip: offset, take: limit }));
    }
    convertTransactionFromEntity(entity) {
        return entity
            ? { ...entity, createdAt: entity.createdAt, updatedAt: entity.updatedAt }
            : undefined;
    }
    convertTransactionsFromEntities(entities) {
        return entities.map((entity) => ({
            ...entity,
            createdAt: entity.createdAt,
            updatedAt: entity.updatedAt,
        }));
    }
};
TransactionQueryImplement = __decorate([
    (0, common_1.Injectable)()
], TransactionQueryImplement);
exports.TransactionQueryImplement = TransactionQueryImplement;
//# sourceMappingURL=transaction.query.js.map
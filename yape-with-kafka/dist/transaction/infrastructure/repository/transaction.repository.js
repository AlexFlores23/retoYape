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
exports.TransactionRepositoryImplement = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const transaction_entity_1 = require("../entity/transaction.entity");
const factory_1 = require("../../domain/factory");
let TransactionRepositoryImplement = class TransactionRepositoryImplement {
    constructor(transactionFactory) {
        this.transactionFactory = transactionFactory;
    }
    async newTransactionId() {
        const emptyEntity = new transaction_entity_1.TransactionEntity();
        const entity = await (0, typeorm_1.getRepository)(transaction_entity_1.TransactionEntity).save(emptyEntity);
        return entity.transactionId;
    }
    async save(data) {
        const models = Array.isArray(data) ? data : [data];
        const entities = models.map((model) => this.modelToEntity(model));
        await (0, typeorm_1.getRepository)(transaction_entity_1.TransactionEntity).save(entities);
    }
    async findByTransactionId(transactionId) {
        const entity = await (0, typeorm_1.getRepository)(transaction_entity_1.TransactionEntity).findOne({ transactionId });
        return entity ? this.entityToModel(entity) : null;
    }
    async findByTransactionIds(transactionIds) {
        const entities = await (0, typeorm_1.getRepository)(transaction_entity_1.TransactionEntity).find({ transactionId: (0, typeorm_1.In)(transactionIds) });
        return entities.map((entity) => this.entityToModel(entity));
    }
    modelToEntity(model) {
        const properties = model.properties();
        return {
            ...properties,
            createdAt: properties.createdAt,
            updatedAt: properties.updatedAt,
        };
    }
    entityToModel(entity) {
        return this.transactionFactory.reconstitute({
            ...entity,
            createdAt: entity.createdAt,
            updatedAt: entity.createdAt,
        });
    }
};
TransactionRepositoryImplement = __decorate([
    __param(0, (0, common_1.Inject)(factory_1.TransactionFactory)),
    __metadata("design:paramtypes", [factory_1.TransactionFactory])
], TransactionRepositoryImplement);
exports.TransactionRepositoryImplement = TransactionRepositoryImplement;
//# sourceMappingURL=transaction.repository.js.map
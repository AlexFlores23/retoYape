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
exports.AccountRepositoryImplement = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const account_entity_1 = require("../entity/account.entity");
const factory_1 = require("../../domain/factory");
let AccountRepositoryImplement = class AccountRepositoryImplement {
    constructor(accountFactory) {
        this.accountFactory = accountFactory;
    }
    async newId() {
        const emptyEntity = new account_entity_1.AccountEntity();
        const entity = await (0, typeorm_1.getRepository)(account_entity_1.AccountEntity).save(emptyEntity);
        return entity.id;
    }
    async save(data) {
        const models = Array.isArray(data) ? data : [data];
        const entities = models.map((model) => this.modelToEntity(model));
        await (0, typeorm_1.getRepository)(account_entity_1.AccountEntity).save(entities);
    }
    async findById(id) {
        const entity = await (0, typeorm_1.getRepository)(account_entity_1.AccountEntity).findOne({ id });
        return entity ? this.entityToModel(entity) : null;
    }
    async findByIds(ids) {
        const entities = await (0, typeorm_1.getRepository)(account_entity_1.AccountEntity).find({ id: (0, typeorm_1.In)(ids) });
        return entities.map((entity) => this.entityToModel(entity));
    }
    async findByName(name) {
        const entities = await (0, typeorm_1.getRepository)(account_entity_1.AccountEntity).find({ name });
        return entities.map((entity) => this.entityToModel(entity));
    }
    modelToEntity(model) {
        const properties = model.properties();
        return {
            ...properties,
            createdAt: properties.openedAt,
            deletedAt: properties.closedAt,
        };
    }
    entityToModel(entity) {
        return this.accountFactory.reconstitute({
            ...entity,
            openedAt: entity.createdAt,
            closedAt: entity.deletedAt,
        });
    }
};
AccountRepositoryImplement = __decorate([
    __param(0, (0, common_1.Inject)(factory_1.AccountFactory)),
    __metadata("design:paramtypes", [factory_1.AccountFactory])
], AccountRepositoryImplement);
exports.AccountRepositoryImplement = AccountRepositoryImplement;
//# sourceMappingURL=account.repository.js.map
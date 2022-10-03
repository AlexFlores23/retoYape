"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountQueryImplement = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const account_entity_1 = require("../entity/account.entity");
let AccountQueryImplement = class AccountQueryImplement {
    async findById(id) {
        return this.convertAccountFromEntity(await (0, typeorm_1.getRepository)(account_entity_1.AccountEntity).findOne(id));
    }
    async find(offset, limit) {
        return this.convertAccountsFromEntities(await (0, typeorm_1.getRepository)(account_entity_1.AccountEntity).find({ skip: offset, take: limit }));
    }
    convertAccountFromEntity(entity) {
        return entity
            ? { ...entity, openedAt: entity.createdAt, closedAt: entity.deletedAt }
            : undefined;
    }
    convertAccountsFromEntities(entities) {
        return entities.map((entity) => ({
            ...entity,
            openedAt: entity.createdAt,
            closedAt: entity.deletedAt,
        }));
    }
};
AccountQueryImplement = __decorate([
    (0, common_1.Injectable)()
], AccountQueryImplement);
exports.AccountQueryImplement = AccountQueryImplement;
//# sourceMappingURL=account.query.js.map
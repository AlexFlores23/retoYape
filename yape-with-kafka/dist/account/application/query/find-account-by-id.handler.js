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
exports.FindAccountByIdHandler = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const injection_token_1 = require("../injection.token");
const find_account_by_id_query_1 = require("./find-account-by-id.query");
const find_account_by_id_result_1 = require("./find-account-by-id.result");
const error_1 = require("../../domain/error");
let FindAccountByIdHandler = class FindAccountByIdHandler {
    constructor(accountQuery) {
        this.accountQuery = accountQuery;
    }
    async execute(query) {
        const data = await this.accountQuery.findById(query.id);
        if (!data)
            throw new common_1.NotFoundException(error_1.ErrorMessage.ACCOUNT_IS_NOT_FOUND);
        const dataKeys = Object.keys(data);
        const resultKeys = Object.keys(new find_account_by_id_result_1.FindAccountByIdResult());
        if (dataKeys.length < resultKeys.length)
            throw new common_1.InternalServerErrorException();
        if (resultKeys.find((resultKey) => !dataKeys.includes(resultKey)))
            throw new common_1.InternalServerErrorException();
        dataKeys
            .filter((dataKey) => !resultKeys.includes(dataKey))
            .forEach((dataKey) => delete data[dataKey]);
        return data;
    }
};
FindAccountByIdHandler = __decorate([
    (0, cqrs_1.QueryHandler)(find_account_by_id_query_1.FindAccountByIdQuery),
    __param(0, (0, common_1.Inject)(injection_token_1.InjectionToken.ACCOUNT_QUERY)),
    __metadata("design:paramtypes", [Object])
], FindAccountByIdHandler);
exports.FindAccountByIdHandler = FindAccountByIdHandler;
//# sourceMappingURL=find-account-by-id.handler.js.map
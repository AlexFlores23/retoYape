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
exports.FindTransactionByTransactionIdHandler = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const injection_token_1 = require("../injection.token");
const find_transaction_by_transactionid_query_1 = require("./find-transaction-by-transactionid.query");
const find_transaction_by_transactionid_result_1 = require("./find-transaction-by-transactionid.result");
const error_1 = require("../../domain/error");
let FindTransactionByTransactionIdHandler = class FindTransactionByTransactionIdHandler {
    constructor(transactionQuery) {
        this.transactionQuery = transactionQuery;
    }
    async execute(query) {
        const data = await this.transactionQuery.findByTransactionId(query.transactionId);
        if (!data)
            throw new common_1.NotFoundException(error_1.ErrorMessage.TRANSACTION_IS_NOT_FOUND);
        const dataKeys = Object.keys(data);
        const resultKeys = Object.keys(new find_transaction_by_transactionid_result_1.FindTransactionByTransactionIdResult());
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
FindTransactionByTransactionIdHandler = __decorate([
    (0, cqrs_1.QueryHandler)(find_transaction_by_transactionid_query_1.FindTransactionByTransactionIdQuery),
    __param(0, (0, common_1.Inject)(injection_token_1.InjectionToken.TRANSACION_QUERY)),
    __metadata("design:paramtypes", [Object])
], FindTransactionByTransactionIdHandler);
exports.FindTransactionByTransactionIdHandler = FindTransactionByTransactionIdHandler;
//# sourceMappingURL=find-transaction-by-transactionid.handler.js.map
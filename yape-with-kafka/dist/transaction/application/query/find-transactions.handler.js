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
exports.FindTransactionsHandler = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const injection_token_1 = require("../injection.token");
const find_transactions_query_1 = require("./find-transactions.query");
const find_transactions_result_1 = require("./find-transactions.result");
let FindTransactionsHandler = class FindTransactionsHandler {
    constructor(transacionQuery) {
        this.transacionQuery = transacionQuery;
    }
    async execute(query) {
        return (await this.transacionQuery.find(query.offset, query.limit)).map(this.filterResultProperties);
    }
    filterResultProperties(data) {
        const dataKeys = Object.keys(data);
        const resultKeys = Object.keys(new find_transactions_result_1.ItemInFindTransactionsResult());
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
FindTransactionsHandler = __decorate([
    (0, cqrs_1.QueryHandler)(find_transactions_query_1.FindTransactionsQuery),
    __param(0, (0, common_1.Inject)(injection_token_1.InjectionToken.TRANSACION_QUERY)),
    __metadata("design:paramtypes", [Object])
], FindTransactionsHandler);
exports.FindTransactionsHandler = FindTransactionsHandler;
//# sourceMappingURL=find-transactions.handler.js.map
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
exports.TransactionController = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const swagger_1 = require("@nestjs/swagger");
const find_transactions_query_dto_1 = require("./dto/find-transactions.query.dto");
const save_transaction_body_dto_1 = require("./dto/save-transaction.body.dto");
const find_transaction_by_transactionid_param_dto_1 = require("./dto/find-transaction-by-transactionid.param.dto");
const find_transaction_by_transactionid_response_dto_1 = require("./dto/find-transaction-by-transactionid.response.dto");
const find_transactions_response_dto_1 = require("./dto/find-transactions.response.dto");
const response_description_1 = require("./response-description");
const save_transaction_command_1 = require("../application/command/save-transaction.command");
const find_transaction_by_transactionid_query_1 = require("../application/query/find-transaction-by-transactionid.query");
const find_transactions_query_1 = require("../application/query/find-transactions.query");
let TransactionController = class TransactionController {
    constructor(commandBus, queryBus) {
        this.commandBus = commandBus;
        this.queryBus = queryBus;
    }
    async saveTransaction(body) {
        const command = new save_transaction_command_1.SaveTransactionCommand(body.transactionId, body.transactionType, body.transactionAccount, body.transactionAmount);
        await this.commandBus.execute(command);
    }
    async findTransactions(queryDto) {
        const query = new find_transactions_query_1.FindTransactionsQuery(queryDto.offset, queryDto.limit);
        return { transactions: await this.queryBus.execute(query) };
    }
    async findTransactionsByTransactionId(param) {
        const query = new find_transaction_by_transactionid_query_1.FindTransactionByTransactionIdQuery(param.transactionId);
        return this.queryBus.execute(query);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiResponse)({ status: 201, description: response_description_1.ResponseDescription.CREATED }),
    (0, swagger_1.ApiBadRequestResponse)({ description: response_description_1.ResponseDescription.BAD_REQUEST }),
    (0, swagger_1.ApiInternalServerErrorResponse)({
        description: response_description_1.ResponseDescription.INTERNAL_SERVER_ERROR,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [save_transaction_body_dto_1.SaveTransactionDTO]),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "saveTransaction", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: response_description_1.ResponseDescription.OK,
        type: find_transactions_response_dto_1.FindTransactionsResponseDTO,
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: response_description_1.ResponseDescription.BAD_REQUEST }),
    (0, swagger_1.ApiInternalServerErrorResponse)({
        description: response_description_1.ResponseDescription.INTERNAL_SERVER_ERROR,
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_transactions_query_dto_1.FindTransactionsQueryDTO]),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "findTransactions", null);
__decorate([
    (0, common_1.Get)('/:transactionId'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: response_description_1.ResponseDescription.OK,
        type: find_transaction_by_transactionid_response_dto_1.FindTransactionByTransactionIdResponseDTO,
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: response_description_1.ResponseDescription.BAD_REQUEST }),
    (0, swagger_1.ApiNotFoundResponse)({ description: response_description_1.ResponseDescription.NOT_FOUND }),
    (0, swagger_1.ApiInternalServerErrorResponse)({
        description: response_description_1.ResponseDescription.INTERNAL_SERVER_ERROR,
    }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_transaction_by_transactionid_param_dto_1.FindTransactionByTransactionIdParamDTO]),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "findTransactionsByTransactionId", null);
TransactionController = __decorate([
    (0, swagger_1.ApiTags)('Transactions'),
    (0, common_1.Controller)('transactions'),
    __metadata("design:paramtypes", [cqrs_1.CommandBus, cqrs_1.QueryBus])
], TransactionController);
exports.TransactionController = TransactionController;
//# sourceMappingURL=transaction.controller.js.map
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
exports.AccountsController = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const swagger_1 = require("@nestjs/swagger");
const deposit_body_dto_1 = require("./dto/deposit.body.dto");
const find_accounts_query_dto_1 = require("./dto/find-accounts.query.dto");
const open_account_body_dto_1 = require("./dto/open-account.body.dto");
const update_password_body_dto_1 = require("./dto/update-password.body.dto");
const withdraw_body_dto_1 = require("./dto/withdraw.body.dto");
const remit_body_dto_1 = require("./dto/remit.body.dto");
const withdraw_param_dto_1 = require("./dto/withdraw.param.dto");
const deposit_param_dto_1 = require("./dto/deposit.param.dto");
const remit_param_dto_1 = require("./dto/remit.param.dto");
const update_password_param_dto_1 = require("./dto/update-password.param.dto");
const delete_account_param_dto_1 = require("./dto/delete-account.param.dto");
const delete_account_query_dto_1 = require("./dto/delete-account.query.dto");
const find_account_by_id_param_dto_1 = require("./dto/find-account-by-id.param.dto");
const find_account_by_id_response_dto_1 = require("./dto/find-account-by-id.response.dto");
const find_accounts_response_dto_1 = require("./dto/find-accounts.response.dto");
const response_description_1 = require("./response-description");
const close_account_command_1 = require("../application/command/close-account.command");
const deposit_command_1 = require("../application/command/deposit.command");
const open_account_command_1 = require("../application/command/open-account.command");
const update_password_command_1 = require("../application/command/update-password.command");
const withdraw_command_1 = require("../application/command/withdraw.command");
const find_account_by_id_query_1 = require("../application/query/find-account-by-id.query");
const find_accounts_query_1 = require("../application/query/find-accounts.query");
const remit_command_1 = require("../application/command/remit.command");
let AccountsController = class AccountsController {
    constructor(commandBus, queryBus) {
        this.commandBus = commandBus;
        this.queryBus = queryBus;
    }
    async openAccount(body) {
        const command = new open_account_command_1.OpenAccountCommand(body.name, body.password);
        await this.commandBus.execute(command);
    }
    async withdraw(param, body) {
        const command = new withdraw_command_1.WithdrawCommand({ ...param, ...body });
        await this.commandBus.execute(command);
    }
    async deposit(param, body) {
        const command = new deposit_command_1.DepositCommand({ ...param, ...body });
        await this.commandBus.execute(command);
    }
    async remit(param, body) {
        const command = new remit_command_1.RemitCommand({ ...param, ...body });
        await this.commandBus.execute(command);
    }
    async updatePassword(param, body) {
        const command = new update_password_command_1.UpdatePasswordCommand({ ...param, ...body });
        await this.commandBus.execute(command);
    }
    async closeAccount(param, query) {
        const command = new close_account_command_1.CloseAccountCommand(param.id, query.password);
        await this.commandBus.execute(command);
    }
    async findAccounts(queryDto) {
        const query = new find_accounts_query_1.FindAccountsQuery(queryDto.offset, queryDto.limit);
        return { accounts: await this.queryBus.execute(query) };
    }
    async findAccountById(param) {
        const query = new find_account_by_id_query_1.FindAccountByIdQuery(param.id);
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
    __metadata("design:paramtypes", [open_account_body_dto_1.OpenAccountBodyDTO]),
    __metadata("design:returntype", Promise)
], AccountsController.prototype, "openAccount", null);
__decorate([
    (0, common_1.Post)('/:id/withdraw'),
    (0, swagger_1.ApiResponse)({ status: 201, description: response_description_1.ResponseDescription.CREATED }),
    (0, swagger_1.ApiBadRequestResponse)({ description: response_description_1.ResponseDescription.BAD_REQUEST }),
    (0, swagger_1.ApiNotFoundResponse)({ description: response_description_1.ResponseDescription.NOT_FOUND }),
    (0, swagger_1.ApiUnauthorizedResponse)({ description: response_description_1.ResponseDescription.UNAUTHORIZED }),
    (0, swagger_1.ApiUnprocessableEntityResponse)({
        description: response_description_1.ResponseDescription.UNPROCESSABLE_ENTITY,
    }),
    (0, swagger_1.ApiInternalServerErrorResponse)({
        description: response_description_1.ResponseDescription.INTERNAL_SERVER_ERROR,
    }),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [withdraw_param_dto_1.WithdrawParamDTO,
        withdraw_body_dto_1.WithdrawBodyDTO]),
    __metadata("design:returntype", Promise)
], AccountsController.prototype, "withdraw", null);
__decorate([
    (0, common_1.Post)('/:id/deposit'),
    (0, swagger_1.ApiResponse)({ status: 201, description: response_description_1.ResponseDescription.CREATED }),
    (0, swagger_1.ApiBadRequestResponse)({ description: response_description_1.ResponseDescription.BAD_REQUEST }),
    (0, swagger_1.ApiNotFoundResponse)({ description: response_description_1.ResponseDescription.NOT_FOUND }),
    (0, swagger_1.ApiInternalServerErrorResponse)({
        description: response_description_1.ResponseDescription.INTERNAL_SERVER_ERROR,
    }),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [deposit_param_dto_1.DepositParamDTO,
        deposit_body_dto_1.DepositBodyDTO]),
    __metadata("design:returntype", Promise)
], AccountsController.prototype, "deposit", null);
__decorate([
    (0, common_1.Post)('/:id/remit'),
    (0, swagger_1.ApiResponse)({ status: 201, description: response_description_1.ResponseDescription.CREATED }),
    (0, swagger_1.ApiBadRequestResponse)({ description: response_description_1.ResponseDescription.BAD_REQUEST }),
    (0, swagger_1.ApiNotFoundResponse)({ description: response_description_1.ResponseDescription.NOT_FOUND }),
    (0, swagger_1.ApiUnauthorizedResponse)({ description: response_description_1.ResponseDescription.UNAUTHORIZED }),
    (0, swagger_1.ApiUnprocessableEntityResponse)({
        description: response_description_1.ResponseDescription.UNPROCESSABLE_ENTITY,
    }),
    (0, swagger_1.ApiInternalServerErrorResponse)({
        description: response_description_1.ResponseDescription.INTERNAL_SERVER_ERROR,
    }),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [remit_param_dto_1.RemitParamDTO,
        remit_body_dto_1.RemitBodyDTO]),
    __metadata("design:returntype", Promise)
], AccountsController.prototype, "remit", null);
__decorate([
    (0, common_1.Put)('/:id/password'),
    (0, swagger_1.ApiResponse)({ status: 200, description: response_description_1.ResponseDescription.OK }),
    (0, swagger_1.ApiBadRequestResponse)({ description: response_description_1.ResponseDescription.BAD_REQUEST }),
    (0, swagger_1.ApiNotFoundResponse)({ description: response_description_1.ResponseDescription.NOT_FOUND }),
    (0, swagger_1.ApiUnauthorizedResponse)({ description: response_description_1.ResponseDescription.UNAUTHORIZED }),
    (0, swagger_1.ApiInternalServerErrorResponse)({
        description: response_description_1.ResponseDescription.INTERNAL_SERVER_ERROR,
    }),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_password_param_dto_1.UpdatePasswordParamDTO,
        update_password_body_dto_1.UpdatePasswordBodyDTO]),
    __metadata("design:returntype", Promise)
], AccountsController.prototype, "updatePassword", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    (0, swagger_1.ApiResponse)({ status: 200, description: response_description_1.ResponseDescription.OK }),
    (0, swagger_1.ApiBadRequestResponse)({ description: response_description_1.ResponseDescription.BAD_REQUEST }),
    (0, swagger_1.ApiNotFoundResponse)({ description: response_description_1.ResponseDescription.NOT_FOUND }),
    (0, swagger_1.ApiUnauthorizedResponse)({ description: response_description_1.ResponseDescription.UNAUTHORIZED }),
    (0, swagger_1.ApiUnprocessableEntityResponse)({
        description: response_description_1.ResponseDescription.UNPROCESSABLE_ENTITY,
    }),
    (0, swagger_1.ApiInternalServerErrorResponse)({
        description: response_description_1.ResponseDescription.INTERNAL_SERVER_ERROR,
    }),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [delete_account_param_dto_1.DeleteAccountParamDTO,
        delete_account_query_dto_1.DeleteAccountQueryDTO]),
    __metadata("design:returntype", Promise)
], AccountsController.prototype, "closeAccount", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: response_description_1.ResponseDescription.OK,
        type: find_accounts_response_dto_1.FindAccountsResponseDTO,
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: response_description_1.ResponseDescription.BAD_REQUEST }),
    (0, swagger_1.ApiInternalServerErrorResponse)({
        description: response_description_1.ResponseDescription.INTERNAL_SERVER_ERROR,
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_accounts_query_dto_1.FindAccountsQueryDTO]),
    __metadata("design:returntype", Promise)
], AccountsController.prototype, "findAccounts", null);
__decorate([
    (0, common_1.Get)('/:id'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: response_description_1.ResponseDescription.OK,
        type: find_account_by_id_response_dto_1.FindAccountByIdResponseDTO,
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: response_description_1.ResponseDescription.BAD_REQUEST }),
    (0, swagger_1.ApiNotFoundResponse)({ description: response_description_1.ResponseDescription.NOT_FOUND }),
    (0, swagger_1.ApiInternalServerErrorResponse)({
        description: response_description_1.ResponseDescription.INTERNAL_SERVER_ERROR,
    }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_account_by_id_param_dto_1.FindAccountByIdParamDTO]),
    __metadata("design:returntype", Promise)
], AccountsController.prototype, "findAccountById", null);
AccountsController = __decorate([
    (0, swagger_1.ApiTags)('Accounts'),
    (0, common_1.Controller)('accounts'),
    __metadata("design:paramtypes", [cqrs_1.CommandBus, cqrs_1.QueryBus])
], AccountsController);
exports.AccountsController = AccountsController;
//# sourceMappingURL=accounts.controller.js.map
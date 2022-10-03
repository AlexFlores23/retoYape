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
exports.RemitHandler = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const remit_command_1 = require("./remit.command");
const injection_token_1 = require("../injection.token");
const error_1 = require("../../domain/error");
const service_1 = require("../../domain/service");
let RemitHandler = class RemitHandler {
    constructor(accountRepository, accountService) {
        this.accountRepository = accountRepository;
        this.accountService = accountService;
    }
    async execute(command) {
        if (command.id === command.receiverId)
            throw new common_1.UnprocessableEntityException(error_1.ErrorMessage.WITHDRAWAL_AND_DEPOSIT_ACCOUNTS_CANNOT_BE_THE_SAME);
        const accounts = await this.accountRepository.findByIds([
            command.id,
            command.receiverId,
        ]);
        if (accounts.length !== 2) {
            throw new common_1.NotFoundException(error_1.ErrorMessage.ACCOUNT_IS_NOT_FOUND);
        }
        const account = accounts.find((item) => item.compareId(command.id));
        if (!account)
            throw new common_1.NotFoundException(error_1.ErrorMessage.ACCOUNT_IS_NOT_FOUND);
        const receiver = accounts.find((item) => item.compareId(command.receiverId));
        if (!receiver)
            throw new common_1.UnprocessableEntityException(error_1.ErrorMessage.RECEIVER_ACCOUNT_IS_NOT_FOUND);
        const { password, amount } = command;
        this.accountService.remit({ account, receiver, password, amount });
        await this.accountRepository.save([account, receiver]);
        account.commit();
        receiver.commit();
    }
};
RemitHandler = __decorate([
    (0, cqrs_1.CommandHandler)(remit_command_1.RemitCommand),
    __param(0, (0, common_1.Inject)(injection_token_1.InjectionToken.ACCOUNT_REPOSITORY)),
    __metadata("design:paramtypes", [Object, service_1.AccountService])
], RemitHandler);
exports.RemitHandler = RemitHandler;
//# sourceMappingURL=remit.handler.js.map
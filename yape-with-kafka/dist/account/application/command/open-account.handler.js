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
exports.OpenAccountHandler = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const open_account_command_1 = require("./open-account.command");
const injection_token_1 = require("../injection.token");
const factory_1 = require("../../domain/factory");
let OpenAccountHandler = class OpenAccountHandler {
    constructor(accountRepository, accountFactory) {
        this.accountRepository = accountRepository;
        this.accountFactory = accountFactory;
    }
    async execute(command) {
        const account = this.accountFactory.create(await this.accountRepository.newId(), command.name);
        account.open(command.password);
        await this.accountRepository.save(account);
        account.commit();
    }
};
OpenAccountHandler = __decorate([
    (0, cqrs_1.CommandHandler)(open_account_command_1.OpenAccountCommand),
    __param(0, (0, common_1.Inject)(injection_token_1.InjectionToken.ACCOUNT_REPOSITORY)),
    __metadata("design:paramtypes", [Object, factory_1.AccountFactory])
], OpenAccountHandler);
exports.OpenAccountHandler = OpenAccountHandler;
//# sourceMappingURL=open-account.handler.js.map
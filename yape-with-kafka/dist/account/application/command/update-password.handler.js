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
exports.UpdatePasswordHandler = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const update_password_command_1 = require("./update-password.command");
const injection_token_1 = require("../injection.token");
const error_1 = require("../../domain/error");
let UpdatePasswordHandler = class UpdatePasswordHandler {
    constructor(accountRepository) {
        this.accountRepository = accountRepository;
    }
    async execute(command) {
        const account = await this.accountRepository.findById(command.id);
        if (!account)
            throw new common_1.NotFoundException(error_1.ErrorMessage.ACCOUNT_IS_NOT_FOUND);
        account.updatePassword(command.password, command.newPassword);
        await this.accountRepository.save(account);
        account.commit();
    }
};
UpdatePasswordHandler = __decorate([
    (0, cqrs_1.CommandHandler)(update_password_command_1.UpdatePasswordCommand),
    __param(0, (0, common_1.Inject)(injection_token_1.InjectionToken.ACCOUNT_REPOSITORY)),
    __metadata("design:paramtypes", [Object])
], UpdatePasswordHandler);
exports.UpdatePasswordHandler = UpdatePasswordHandler;
//# sourceMappingURL=update-password.handler.js.map
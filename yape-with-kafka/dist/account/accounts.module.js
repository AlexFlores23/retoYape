"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountsModule = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const event_store_1 = require("./infrastructure/cache/event-store");
const integration_event_publisher_1 = require("./infrastructure/message/integration-event.publisher");
const account_query_1 = require("./infrastructure/query/account.query");
const account_repository_1 = require("./infrastructure/repository/account.repository");
const accounts_controller_1 = require("./interface/accounts.controller");
const close_account_handler_1 = require("./application/command/close-account.handler");
const deposit_handler_1 = require("./application/command/deposit.handler");
const open_account_handler_1 = require("./application/command/open-account.handler");
const remit_handler_1 = require("./application/command/remit.handler");
const update_password_handler_1 = require("./application/command/update-password.handler");
const withdraw_handler_1 = require("./application/command/withdraw.handler");
const account_closed_handler_1 = require("./application/event/account-closed.handler");
const account_opened_handler_1 = require("./application/event/account-opened.handler");
const deposited_handler_1 = require("./application/event/deposited.handler");
const password_updated_handler_1 = require("./application/event/password-updated.handler");
const withdrawn_handler_1 = require("./application/event/withdrawn.handler");
const find_account_by_id_handler_1 = require("./application/query/find-account-by-id.handler");
const find_accounts_handler_1 = require("./application/query/find-accounts.handler");
const service_1 = require("./domain/service");
const factory_1 = require("./domain/factory");
const injection_token_1 = require("./application/injection.token");
const infrastructure = [
    {
        provide: injection_token_1.InjectionToken.ACCOUNT_REPOSITORY,
        useClass: account_repository_1.AccountRepositoryImplement,
    },
    {
        provide: injection_token_1.InjectionToken.INTEGRATION_EVENT_PUBLISHER,
        useClass: integration_event_publisher_1.IntegrationEventPublisherImplement,
    },
    {
        provide: injection_token_1.InjectionToken.EVENT_STORE,
        useClass: event_store_1.EventStoreImplement,
    },
    {
        provide: injection_token_1.InjectionToken.ACCOUNT_QUERY,
        useClass: account_query_1.AccountQueryImplement,
    },
];
const application = [
    close_account_handler_1.CloseAccountHandler,
    deposit_handler_1.DepositHandler,
    open_account_handler_1.OpenAccountHandler,
    remit_handler_1.RemitHandler,
    update_password_handler_1.UpdatePasswordHandler,
    withdraw_handler_1.WithdrawHandler,
    account_closed_handler_1.AccountClosedHandler,
    account_opened_handler_1.AccountOpenedHandler,
    deposited_handler_1.DepositedHandler,
    password_updated_handler_1.PasswordUpdatedHandler,
    withdrawn_handler_1.WithdrawnHandler,
    find_account_by_id_handler_1.FindAccountByIdHandler,
    find_accounts_handler_1.FindAccountsHandler,
];
const domain = [service_1.AccountService, factory_1.AccountFactory];
let AccountsModule = class AccountsModule {
};
AccountsModule = __decorate([
    (0, common_1.Module)({
        imports: [cqrs_1.CqrsModule],
        controllers: [accounts_controller_1.AccountsController],
        providers: [common_1.Logger, ...infrastructure, ...application, ...domain],
    })
], AccountsModule);
exports.AccountsModule = AccountsModule;
//# sourceMappingURL=accounts.module.js.map
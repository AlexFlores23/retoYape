"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsModule = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const event_store_1 = require("./infrastructure/cache/event-store");
const integration_event_publisher_1 = require("./infrastructure/message/integration-event.publisher");
const transaction_query_1 = require("./infrastructure/query/transaction.query");
const transaction_repository_1 = require("./infrastructure/repository/transaction.repository");
const transaction_controller_1 = require("./interface/transaction.controller");
const save_transaction_handler_1 = require("./application/command/save-transaction.handler");
const transaction_created_handler_1 = require("./application/event/transaction-created.handler");
const transaction_updated_handler_1 = require("./application/event/transaction-updated.handler");
const find_transaction_by_transactionid_handler_1 = require("./application/query/find-transaction-by-transactionid.handler");
const find_transactions_handler_1 = require("./application/query/find-transactions.handler");
const service_1 = require("./domain/service");
const factory_1 = require("./domain/factory");
const injection_token_1 = require("./application/injection.token");
const infrastructure = [
    {
        provide: injection_token_1.InjectionToken.TRANSACTION_REPOSITORY,
        useClass: transaction_repository_1.TransactionRepositoryImplement,
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
        provide: injection_token_1.InjectionToken.TRANSACION_QUERY,
        useClass: transaction_query_1.TransactionQueryImplement,
    },
];
const application = [
    save_transaction_handler_1.SaveTransactionHandler,
    transaction_created_handler_1.TransactionCreatedHandler,
    transaction_updated_handler_1.TransactionUpdatedHandler,
    find_transaction_by_transactionid_handler_1.FindTransactionByTransactionIdHandler,
    find_transactions_handler_1.FindTransactionsHandler,
];
const domain = [service_1.TransactionService, factory_1.TransactionFactory];
let TransactionsModule = class TransactionsModule {
};
TransactionsModule = __decorate([
    (0, common_1.Module)({
        imports: [cqrs_1.CqrsModule],
        controllers: [transaction_controller_1.TransactionController],
        providers: [common_1.Logger, ...infrastructure, ...application, ...domain],
    })
], TransactionsModule);
exports.TransactionsModule = TransactionsModule;
//# sourceMappingURL=transactions.module.js.map
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
exports.TransactionCreatedHandler = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const integration_1 = require("./integration");
const injection_token_1 = require("../injection.token");
const transacion_created_event_1 = require("../../domain/event/transacion-created.event");
let TransactionCreatedHandler = class TransactionCreatedHandler {
    constructor(logger, publisher, eventStore) {
        this.logger = logger;
        this.publisher = publisher;
        this.eventStore = eventStore;
    }
    async handle(event) {
        this.logger.log(`${integration_1.IntegrationEventSubject.CREATED}: ${JSON.stringify(event)}`);
        await this.publisher.publish({
            subject: integration_1.IntegrationEventSubject.CREATED,
            data: { transactionId: event.transactionId },
        });
        await this.eventStore.save({
            subject: integration_1.IntegrationEventSubject.CREATED,
            data: event,
        });
    }
};
TransactionCreatedHandler = __decorate([
    (0, cqrs_1.EventsHandler)(transacion_created_event_1.TransactionCreatedEvent),
    __param(1, (0, common_1.Inject)(injection_token_1.InjectionToken.INTEGRATION_EVENT_PUBLISHER)),
    __param(2, (0, common_1.Inject)(injection_token_1.InjectionToken.EVENT_STORE)),
    __metadata("design:paramtypes", [common_1.Logger, Object, Object])
], TransactionCreatedHandler);
exports.TransactionCreatedHandler = TransactionCreatedHandler;
//# sourceMappingURL=transaction-created.handler.js.map
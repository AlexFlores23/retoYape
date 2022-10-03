"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionImplement = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const transacion_created_event_1 = require("./event/transacion-created.event");
const transaction_updated_event_1 = require("./event/transaction-updated.event");
class TransactionImplement extends cqrs_1.AggregateRoot {
    constructor(properties) {
        super();
        this.createdAt = new Date();
        this.updatedAt = new Date();
        Object.assign(this, properties);
    }
    properties() {
        return {
            transactionId: this.transactionId,
            transactionType: this.transactionType,
            transactionAccount: this.transactionAccount,
            transactionAmount: this.transactionAmount,
            transactionStatus: this.transactionStatus,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
        };
    }
    compareTransactionId(transactionId) {
        return transactionId === this.transactionId;
    }
    create() {
        this.createdAt = new Date();
        this.apply(Object.assign(new transacion_created_event_1.TransactionCreatedEvent(), this));
    }
    update() {
        this.updatedAt = new Date();
        this.apply(Object.assign(new transaction_updated_event_1.TransactionUpdatedEvent(), this));
    }
}
exports.TransactionImplement = TransactionImplement;
//# sourceMappingURL=transaction.js.map
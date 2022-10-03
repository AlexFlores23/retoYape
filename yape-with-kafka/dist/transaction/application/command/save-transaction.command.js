"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveTransactionCommand = void 0;
class SaveTransactionCommand {
    constructor(transactionId, transactionType, transactionAccount, transactionAmount) {
        this.transactionId = transactionId;
        this.transactionType = transactionType;
        this.transactionAccount = transactionAccount;
        this.transactionAmount = transactionAmount;
    }
}
exports.SaveTransactionCommand = SaveTransactionCommand;
//# sourceMappingURL=save-transaction.command.js.map
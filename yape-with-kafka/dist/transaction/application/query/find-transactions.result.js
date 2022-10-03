"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindTransactionsResult = exports.ItemInFindTransactionsResult = void 0;
class ItemInFindTransactionsResult {
    constructor() {
        this.transactionId = '';
        this.transactionType = 0;
        this.transactionAccount = 0;
        this.transactionAmount = 0;
        this.transactionStatus = 0;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}
exports.ItemInFindTransactionsResult = ItemInFindTransactionsResult;
class FindTransactionsResult extends Array {
}
exports.FindTransactionsResult = FindTransactionsResult;
//# sourceMappingURL=find-transactions.result.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountService = exports.RemittanceOptions = void 0;
class RemittanceOptions {
}
exports.RemittanceOptions = RemittanceOptions;
class AccountService {
    remit({ account, receiver, password, amount }) {
        account.withdraw(amount, password);
        receiver.deposit(amount);
    }
}
exports.AccountService = AccountService;
//# sourceMappingURL=service.js.map
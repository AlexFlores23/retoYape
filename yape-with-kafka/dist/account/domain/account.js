"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountImplement = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const bcrypt = require("bcrypt");
const error_1 = require("./error");
const account_closed_event_1 = require("./event/account-closed.event");
const account_opened_event_1 = require("./event/account-opened.event");
const deposited_event_1 = require("./event/deposited.event");
const password_updated_event_1 = require("./event/password-updated.event");
const withdrawn_event_1 = require("./event/withdrawn.event");
class AccountImplement extends cqrs_1.AggregateRoot {
    constructor(properties) {
        super();
        this.password = '';
        this.balance = 0;
        this.openedAt = new Date();
        this.updatedAt = new Date();
        this.closedAt = null;
        this.version = 0;
        Object.assign(this, properties);
    }
    properties() {
        return {
            id: this.id,
            name: this.name,
            password: this.password,
            balance: this.balance,
            openedAt: this.openedAt,
            updatedAt: this.updatedAt,
            closedAt: this.closedAt,
            version: this.version,
        };
    }
    compareId(id) {
        return id === this.id;
    }
    open(password) {
        this.setPassword(password);
        this.apply(Object.assign(new account_opened_event_1.AccountOpenedEvent(), this));
    }
    setPassword(password) {
        if (this.password !== '' || password === '')
            throw new common_1.InternalServerErrorException(error_1.ErrorMessage.CAN_NOT_SET_PASSWORD);
        const salt = bcrypt.genSaltSync();
        this.password = bcrypt.hashSync(password, salt);
        this.updatedAt = new Date();
    }
    updatePassword(password, data) {
        if (!this.comparePassword(password))
            throw new common_1.UnauthorizedException();
        this.updatedAt = new Date();
        const salt = bcrypt.genSaltSync();
        this.password = bcrypt.hashSync(data, salt);
        this.apply(Object.assign(new password_updated_event_1.PasswordUpdatedEvent(), this));
    }
    withdraw(amount, password) {
        if (!this.comparePassword(password))
            throw new common_1.UnauthorizedException();
        if (amount < 1)
            throw new common_1.InternalServerErrorException(error_1.ErrorMessage.CAN_NOT_WITHDRAW_UNDER_1);
        if (this.balance < amount)
            throw new common_1.UnprocessableEntityException(error_1.ErrorMessage.REQUESTED_AMOUNT_EXCEEDS_YOUR_WITHDRAWAL_LIMIT);
        this.balance -= amount;
        this.updatedAt = new Date();
        this.apply(Object.assign(new withdrawn_event_1.WithdrawnEvent(), this));
    }
    deposit(amount) {
        if (amount < 1)
            throw new common_1.InternalServerErrorException(error_1.ErrorMessage.CAN_NOT_DEPOSIT_UNDER_1);
        this.balance += amount;
        this.updatedAt = new Date();
        this.apply(Object.assign(new deposited_event_1.DepositedEvent(), this));
    }
    close(password) {
        if (!this.comparePassword(password))
            throw new common_1.UnauthorizedException();
        if (this.balance > 0)
            throw new common_1.UnprocessableEntityException(error_1.ErrorMessage.ACCOUNT_BALANCE_IS_REMAINED);
        this.closedAt = new Date();
        this.updatedAt = new Date();
        this.apply(Object.assign(new account_closed_event_1.AccountClosedEvent(), this));
    }
    comparePassword(password) {
        return bcrypt.compareSync(password, this.password);
    }
}
exports.AccountImplement = AccountImplement;
//# sourceMappingURL=account.js.map
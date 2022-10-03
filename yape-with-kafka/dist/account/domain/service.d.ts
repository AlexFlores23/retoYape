import { Account } from 'src/account/domain/account';
export declare class RemittanceOptions {
    readonly password: string;
    readonly account: Account;
    readonly receiver: Account;
    readonly amount: number;
}
export declare class AccountService {
    remit({ account, receiver, password, amount }: RemittanceOptions): void;
}

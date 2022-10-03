import { Transaction } from 'src/transaction/domain/transaction';
export declare class RemittanceOptions {
    readonly password: string;
    readonly transaction: Transaction;
    readonly receiver: Transaction;
    readonly amount: number;
}
export declare class UpdateOptions {
    readonly transaction: Transaction;
}
export declare class TransactionService {
    update({ transaction }: UpdateOptions): void;
}

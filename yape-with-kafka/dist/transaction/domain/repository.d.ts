import { Transaction } from 'src/transaction/domain/transaction';
export interface TransactionRepository {
    newTransactionId: () => Promise<string>;
    save: (transaction: Transaction | Transaction[]) => Promise<void>;
    findByTransactionId: (TransactionId: string) => Promise<Transaction | null>;
    findByTransactionIds: (TransactionIds: string[]) => Promise<Transaction[]>;
}

import { TransactionRepository } from 'src/transaction/domain/repository';
import { Transaction } from 'src/transaction/domain/transaction';
import { TransactionFactory } from 'src/transaction/domain/factory';
export declare class TransactionRepositoryImplement implements TransactionRepository {
    private readonly transactionFactory;
    constructor(transactionFactory: TransactionFactory);
    newTransactionId(): Promise<string>;
    save(data: Transaction | Transaction[]): Promise<void>;
    findByTransactionId(transactionId: string): Promise<Transaction | null>;
    findByTransactionIds(transactionIds: string[]): Promise<Transaction[]>;
    private modelToEntity;
    private entityToModel;
}

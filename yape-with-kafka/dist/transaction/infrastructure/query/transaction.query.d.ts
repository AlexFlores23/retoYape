import { Transaction, TransactionQuery, Transactions } from 'src/transaction/application/query/transaction.query';
export declare class TransactionQueryImplement implements TransactionQuery {
    findByTransactionId(id: string): Promise<undefined | Transaction>;
    find(offset: number, limit: number): Promise<Transactions>;
    private convertTransactionFromEntity;
    private convertTransactionsFromEntities;
}

import { IQueryHandler } from '@nestjs/cqrs';
import { TransactionQuery } from 'src/transaction/application/query/transaction.query';
import { FindTransactionByTransactionIdQuery } from 'src/transaction/application/query/find-transaction-by-transactionid.query';
import { FindTransactionByTransactionIdResult } from 'src/transaction/application/query/find-transaction-by-transactionid.result';
export declare class FindTransactionByTransactionIdHandler implements IQueryHandler<FindTransactionByTransactionIdQuery, FindTransactionByTransactionIdResult> {
    readonly transactionQuery: TransactionQuery;
    constructor(transactionQuery: TransactionQuery);
    execute(query: FindTransactionByTransactionIdQuery): Promise<FindTransactionByTransactionIdResult>;
}

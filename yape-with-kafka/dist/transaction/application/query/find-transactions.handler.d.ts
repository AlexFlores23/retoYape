import { IQueryHandler } from '@nestjs/cqrs';
import { TransactionQuery } from 'src/transaction/application/query/transaction.query';
import { FindTransactionsQuery } from 'src/transaction/application/query/find-transactions.query';
import { FindTransactionsResult } from 'src/transaction/application/query/find-transactions.result';
export declare class FindTransactionsHandler implements IQueryHandler<FindTransactionsQuery, FindTransactionsResult> {
    readonly transacionQuery: TransactionQuery;
    constructor(transacionQuery: TransactionQuery);
    execute(query: FindTransactionsQuery): Promise<FindTransactionsResult>;
    private filterResultProperties;
}

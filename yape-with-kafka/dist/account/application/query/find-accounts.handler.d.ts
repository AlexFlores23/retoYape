import { IQueryHandler } from '@nestjs/cqrs';
import { AccountQuery } from 'src/account/application/query/account.query';
import { FindAccountsQuery } from 'src/account/application/query/find-accounts.query';
import { FindAccountsResult } from 'src/account/application/query/find-accounts.result';
export declare class FindAccountsHandler implements IQueryHandler<FindAccountsQuery, FindAccountsResult> {
    readonly accountQuery: AccountQuery;
    constructor(accountQuery: AccountQuery);
    execute(query: FindAccountsQuery): Promise<FindAccountsResult>;
    private filterResultProperties;
}

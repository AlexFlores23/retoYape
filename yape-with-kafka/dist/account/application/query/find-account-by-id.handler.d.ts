import { IQueryHandler } from '@nestjs/cqrs';
import { AccountQuery } from 'src/account/application/query/account.query';
import { FindAccountByIdQuery } from 'src/account/application/query/find-account-by-id.query';
import { FindAccountByIdResult } from 'src/account/application/query/find-account-by-id.result';
export declare class FindAccountByIdHandler implements IQueryHandler<FindAccountByIdQuery, FindAccountByIdResult> {
    readonly accountQuery: AccountQuery;
    constructor(accountQuery: AccountQuery);
    execute(query: FindAccountByIdQuery): Promise<FindAccountByIdResult>;
}

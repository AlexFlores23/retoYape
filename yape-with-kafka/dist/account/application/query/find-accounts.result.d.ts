import { IQueryResult } from '@nestjs/cqrs';
export declare class ItemInFindAccountsResult {
    readonly id: string;
    readonly name: string;
    readonly balance: number;
}
export declare class FindAccountsResult extends Array<ItemInFindAccountsResult> implements IQueryResult {
}

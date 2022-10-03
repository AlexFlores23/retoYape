import { IQueryResult } from '@nestjs/cqrs';
export declare class ItemInFindTransactionsResult {
    readonly transactionId: string;
    readonly transactionType: number;
    readonly transactionAccount: number;
    readonly transactionAmount: number;
    readonly transactionStatus: number;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
export declare class FindTransactionsResult extends Array<ItemInFindTransactionsResult> implements IQueryResult {
}

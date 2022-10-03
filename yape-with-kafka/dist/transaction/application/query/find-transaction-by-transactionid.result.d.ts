import { IQueryResult } from '@nestjs/cqrs';
export declare class FindTransactionByTransactionIdResult implements IQueryResult {
    readonly transactionId: string;
    readonly transactionType: number;
    readonly transactionAccount: number;
    readonly transactionAmount: number;
    readonly transactionStatus: number;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}

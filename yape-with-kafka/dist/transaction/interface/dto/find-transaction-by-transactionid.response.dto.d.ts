import { FindTransactionByTransactionIdResult } from 'src/transaction/application/query/find-transaction-by-transactionid.result';
export declare class FindTransactionByTransactionIdResponseDTO extends FindTransactionByTransactionIdResult {
    readonly transactionId: string;
    readonly transactionType: number;
    readonly transactionAccount: number;
    readonly transactionAmount: number;
    readonly transactionStatus: number;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}

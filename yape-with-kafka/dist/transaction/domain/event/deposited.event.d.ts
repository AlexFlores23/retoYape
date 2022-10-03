import { IEvent } from '@nestjs/cqrs';
import { TransactionProperties } from 'src/transaction/domain/transaction';
export declare class DepositedEvent implements IEvent, TransactionProperties {
    readonly transactionId: string;
    readonly transactionType: number;
    readonly transactionAccount: number;
    readonly transactionAmount: number;
    readonly transactionStatus: number;
    readonly createdAt: Date;
    readonly openedAt: Date;
    readonly updatedAt: Date;
    readonly closedAt: Date | null;
    readonly version: number;
}

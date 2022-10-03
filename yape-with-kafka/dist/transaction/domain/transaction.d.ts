import { AggregateRoot } from '@nestjs/cqrs';
export declare type TransactionEssentialProperties = Required<{
    readonly transactionId: string;
    readonly transactionType: number;
    readonly transactionAccount: number;
    readonly transactionAmount: number;
}>;
export declare type TransactionOptionalProperties = Partial<{
    readonly transactionId: string;
    readonly transactionType: number;
    readonly transactionAccount: number;
    readonly transactionAmount: number;
    readonly transactionStatus: number;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}>;
export declare type TransactionProperties = TransactionEssentialProperties & Required<TransactionOptionalProperties>;
export interface Transaction {
    properties: () => TransactionProperties;
    compareTransactionId: (transactionId: string) => boolean;
    create: () => void;
    update: () => void;
    commit: () => void;
}
export declare class TransactionImplement extends AggregateRoot implements Transaction {
    private readonly transactionId;
    private readonly transactionType;
    private readonly transactionAccount;
    private readonly transactionAmount;
    private readonly transactionStatus;
    private createdAt;
    private updatedAt;
    constructor(properties: TransactionEssentialProperties & TransactionOptionalProperties);
    properties(): TransactionProperties;
    compareTransactionId(transactionId: string): boolean;
    create(): void;
    update(): void;
}

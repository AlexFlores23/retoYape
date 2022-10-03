import { BaseEntity } from 'src/transaction/infrastructure/entity/base.entity';
export declare class TransactionEntity extends BaseEntity {
    transactionId: string;
    transactionType: number;
    transactionAccount: number;
    transactionAmount: number;
    transactionStatus: number;
}

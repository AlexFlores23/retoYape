import { EventPublisher } from '@nestjs/cqrs';
import { Transaction, TransactionProperties } from 'src/transaction/domain/transaction';
export declare class TransactionFactory {
    private readonly eventPublisher;
    constructor(eventPublisher: EventPublisher);
    create(transactionId: string, transactionType: number, transactionAccount: number, transactionAmount: number): Transaction;
    reconstitute(properties: TransactionProperties): Transaction;
}

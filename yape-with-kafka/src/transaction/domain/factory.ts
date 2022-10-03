import { Inject } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

import {
  Transaction,
  TransactionImplement,
  TransactionProperties,
} from 'src/transaction/domain/transaction';

export class TransactionFactory {
  constructor(
    @Inject(EventPublisher) private readonly eventPublisher: EventPublisher,
  ) {}

  create(transactionId: string, transactionType: number, transactionAccount:number, transactionAmount:number): Transaction {
    return this.eventPublisher.mergeObjectContext(
      new TransactionImplement({ transactionId, transactionType,  transactionAccount, transactionAmount}),
    );
  }

  reconstitute(properties: TransactionProperties): Transaction {
    return this.eventPublisher.mergeObjectContext(
      new TransactionImplement(properties),
    );
  }
}

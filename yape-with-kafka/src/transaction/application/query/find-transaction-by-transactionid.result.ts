import { IQueryResult } from '@nestjs/cqrs';

export class FindTransactionByTransactionIdResult implements IQueryResult {
  readonly transactionId: string = '';
  readonly transactionType: number = 0;
  readonly transactionAccount: number = 0;
  readonly transactionAmount: number = 0;
  readonly transactionStatus: number = 0;
  readonly createdAt: Date = new Date();
  readonly updatedAt: Date = new Date();
}

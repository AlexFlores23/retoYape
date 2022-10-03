import { IQueryResult } from '@nestjs/cqrs';

export class ItemInFindTransactionsResult {
  readonly transactionId: string = '';
  readonly transactionType: number = 0;
  readonly transactionAccount: number = 0;
  readonly transactionAmount: number = 0;
  readonly transactionStatus: number = 0;
  readonly createdAt: Date = new Date();
  readonly updatedAt: Date = new Date();
}

export class FindTransactionsResult
  extends Array<ItemInFindTransactionsResult>
  implements IQueryResult {}

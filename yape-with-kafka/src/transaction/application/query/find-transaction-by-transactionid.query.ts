import { IQuery } from '@nestjs/cqrs';

export class FindTransactionByTransactionIdQuery implements IQuery {
  constructor(readonly transactionId: string) {}
}

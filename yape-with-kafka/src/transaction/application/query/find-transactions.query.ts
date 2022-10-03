import { IQuery } from '@nestjs/cqrs';

export class FindTransactionsQuery implements IQuery {
  constructor(readonly offset: number, readonly limit: number) {}
}

import { Inject, InternalServerErrorException } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { InjectionToken } from 'src/transaction/application/injection.token';
import {
  TransactionQuery,
  ItemInTransactions,
} from 'src/transaction/application/query/transaction.query';
import { FindTransactionsQuery } from 'src/transaction/application/query/find-transactions.query';
import {
  FindTransactionsResult,
  ItemInFindTransactionsResult,
} from 'src/transaction/application/query/find-transactions.result';

@QueryHandler(FindTransactionsQuery)
export class FindTransactionsHandler
  implements IQueryHandler<FindTransactionsQuery, FindTransactionsResult>
{
  constructor(
    @Inject(InjectionToken.TRANSACION_QUERY) readonly transacionQuery: TransactionQuery,
  ) {}

  async execute(query: FindTransactionsQuery): Promise<FindTransactionsResult> {
    return (await this.transacionQuery.find(query.offset, query.limit)).map(
      this.filterResultProperties,
    );
  }

  private filterResultProperties(
    data: ItemInTransactions,
  ): ItemInFindTransactionsResult {
    const dataKeys = Object.keys(data);
    const resultKeys = Object.keys(new ItemInFindTransactionsResult());

    if (dataKeys.length < resultKeys.length)
      throw new InternalServerErrorException();

    if (resultKeys.find((resultKey) => !dataKeys.includes(resultKey)))
      throw new InternalServerErrorException();

    dataKeys
      .filter((dataKey) => !resultKeys.includes(dataKey))
      .forEach((dataKey) => delete data[dataKey]);

    return data;
  }
}

import {
  Inject,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { InjectionToken } from 'src/transaction/application/injection.token';
import { TransactionQuery } from 'src/transaction/application/query/transaction.query';
import { FindTransactionByTransactionIdQuery } from 'src/transaction/application/query/find-transaction-by-transactionid.query';
import { FindTransactionByTransactionIdResult } from 'src/transaction/application/query/find-transaction-by-transactionid.result';

import { ErrorMessage } from 'src/transaction/domain/error';

@QueryHandler(FindTransactionByTransactionIdQuery)
export class FindTransactionByTransactionIdHandler
  implements IQueryHandler<FindTransactionByTransactionIdQuery, FindTransactionByTransactionIdResult>
{
  constructor(
    @Inject(InjectionToken.TRANSACION_QUERY) readonly transactionQuery: TransactionQuery,
  ) {}

  async execute(query: FindTransactionByTransactionIdQuery): Promise<FindTransactionByTransactionIdResult> {
    const data = await this.transactionQuery.findByTransactionId(query.transactionId);
    if (!data) throw new NotFoundException(ErrorMessage.TRANSACTION_IS_NOT_FOUND);

    const dataKeys = Object.keys(data);
    const resultKeys = Object.keys(new FindTransactionByTransactionIdResult());

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

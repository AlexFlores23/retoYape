import { ModuleMetadata, Provider } from '@nestjs/common';
import { Test } from '@nestjs/testing';

import { InjectionToken } from 'src/transaction/application/injection.token';
import {
  TransactionQuery,
  Transactions,
} from 'src/transaction/application/query/transaction.query';
import { FindTransactionsHandler } from 'src/transaction/application/query/find-transactions.handler';
import { FindTransactionsQuery } from 'src/transaction/application/query/find-transactions.query';
import { FindTransactionsResult } from 'src/transaction/application/query/find-transactions.result';

describe('FindTransactionsHandler', () => {
  let handler: FindTransactionsHandler;
  let TransactionQuery: TransactionQuery;

  beforeEach(async () => {
    const queryProvider: Provider = {
      provide: InjectionToken.TRANSACION_QUERY,
      useValue: {},
    };
    const providers: Provider[] = [queryProvider, FindTransactionsHandler];
    const moduleMetadata: ModuleMetadata = { providers };
    const testModule = await Test.createTestingModule(moduleMetadata).compile();
    handler = testModule.get(FindTransactionsHandler);
    TransactionQuery = testModule.get(InjectionToken.TRANSACION_QUERY);
  });

  describe('execute', () => {
    it('should return FindTransactionsResult when execute FindTransactionsQuery', async () => {
      const transactions: Transactions = [
        {
          transactionId: 'transactionId',
          transactionType: 0,
          transactionAccount: 0,
          transactionAmount: 0,
          transactionStatus: 0 ,
          createdAt: expect.anything(),
          updatedAt: expect.anything(),
        },
      ];
      TransactionQuery.find = jest.fn().mockResolvedValue(transactions);

      const query = new FindTransactionsQuery(0, 1);

      const result: FindTransactionsResult = [
        {
          transactionId: 'transactionId',
          transactionType: 0,
          transactionAccount: 0,
          transactionAmount: 0,
          transactionStatus: 0,
          createdAt: expect.anything(),
          updatedAt: expect.anything(),
        },
      ];

      await expect(handler.execute(query)).resolves.toEqual(result);
      expect(TransactionQuery.find).toBeCalledTimes(1);
      expect(TransactionQuery.find).toBeCalledWith(query.offset, query.limit);
    });
  });
});

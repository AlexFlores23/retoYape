import { ModuleMetadata, NotFoundException, Provider } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { InjectionToken } from 'src/transaction/application/injection.token';

import {
  Transaction,
  TransactionQuery,
} from 'src/transaction/application/query/transaction.query';
import { FindTransactionByTransactionIdHandler } from 'src/transaction/application/query/find-transaction-by-transactionid.handler';
import { FindTransactionByTransactionIdQuery } from 'src/transaction/application/query/find-transaction-by-transactionid.query';
import { FindTransactionByTransactionIdResult } from 'src/transaction/application/query/find-transaction-by-transactionid.result';

describe('FindTransactionByTransactionIdHandler', () => {
  let transactionQuery: TransactionQuery;
  let handler: FindTransactionByTransactionIdHandler;

  beforeEach(async () => {
    const queryProvider: Provider = {
      provide: InjectionToken.TRANSACION_QUERY,
      useValue: {},
    };
    const providers: Provider[] = [queryProvider, FindTransactionByTransactionIdHandler];
    const moduleMetadata: ModuleMetadata = { providers };
    const testModule = await Test.createTestingModule(moduleMetadata).compile();
    transactionQuery = testModule.get(InjectionToken.TRANSACION_QUERY);
    handler = testModule.get(FindTransactionByTransactionIdHandler);
  });

  describe('execute', () => {
    it('should throw NotFoundException when data is not found', async () => {
      transactionQuery.findByTransactionId = jest.fn().mockResolvedValue(undefined);

      const query = new FindTransactionByTransactionIdQuery('transactionId');

      await expect(handler.execute(query)).rejects.toThrowError(
        NotFoundException,
      );
      expect(transactionQuery.findByTransactionId).toBeCalledTimes(1);
      expect(transactionQuery.findByTransactionId).toBeCalledWith(query.transactionId);
    });

    it('should return FindTransactionByTransactionIdResult when execute FindTransactionByTransactionQuery', async () => {
      const transaction: Transaction = {
        transactionId: 'transactionId',
        transactionType: 0,
        transactionAccount: 0,
        transactionAmount: 0,
        transactionStatus: 0 ,
        createdAt: expect.anything(),
        updatedAt: expect.anything(),
      };
      transactionQuery.findByTransactionId = jest.fn().mockResolvedValue(transaction);

      const query = new FindTransactionByTransactionIdQuery('transactionId');

      const result: FindTransactionByTransactionIdResult = {
        transactionId: 'transactionId',
        transactionType: 0,
        transactionAccount: 0,
        transactionAmount: 0,
        transactionStatus: 0 ,
        createdAt: expect.anything(),
        updatedAt: expect.anything(),
      };

      await expect(handler.execute(query)).resolves.toEqual(result);
      expect(transactionQuery.findByTransactionId).toBeCalledTimes(1);
      expect(transactionQuery.findByTransactionId).toBeCalledWith(query.transactionId);
    });
  });
});

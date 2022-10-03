import { ModuleMetadata, Provider } from '@nestjs/common';
import { Test } from '@nestjs/testing';

import { SaveTransactionCommand } from 'src/transaction/application/command/save-transaction.command';
import { SaveTransactionHandler } from 'src/transaction/application/command/save-transaction.handler';
import { InjectionToken } from 'src/transaction/application/injection.token';
import { TransactionFactory } from 'src/transaction/domain/factory';

import { TransactionRepository } from 'src/transaction/domain/repository';

describe('SaveTransactionHandler', () => {
  let handler: SaveTransactionHandler;
  let repository: TransactionRepository;
  let factory: TransactionFactory;

  beforeEach(async () => {
    const repoProvider: Provider = {
      provide: InjectionToken.TRANSACTION_REPOSITORY,
      useValue: {},
    };
    const factoryProvider: Provider = {
      provide: TransactionFactory,
      useValue: {},
    };
    const providers: Provider[] = [
      SaveTransactionHandler,
      repoProvider,
      factoryProvider,
    ];
    const moduleMetadata: ModuleMetadata = { providers };
    const testModule = await Test.createTestingModule(moduleMetadata).compile();

    handler = testModule.get(SaveTransactionHandler);
    repository = testModule.get(InjectionToken.TRANSACTION_REPOSITORY);
    factory = testModule.get(TransactionFactory);
  });

  describe('execute', () => {
    it('should execute saveTransactionCommand', async () => {
      const transaction = { create: jest.fn(), commit: jest.fn() };

      factory.create = jest.fn().mockReturnValue(transaction);
      repository.newTransactionId = jest.fn().mockResolvedValue('transactionId');
      repository.save = jest.fn().mockResolvedValue(undefined);

      const command = new SaveTransactionCommand('accountId', 1, 1, 1);

      await expect(handler.execute(command)).resolves.toEqual(undefined);
      expect(repository.newTransactionId).toBeCalledTimes(1);
      expect(transaction.create).toBeCalledTimes(1);
      expect(transaction.create).toBeCalledWith();
      expect(repository.save).toBeCalledTimes(1);
      expect(repository.save).toBeCalledWith(transaction);
      expect(transaction.commit).toBeCalledTimes(1);
    });
  });
});

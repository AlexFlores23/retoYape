import { Logger, ModuleMetadata, Provider } from '@nestjs/common';
import { Test } from '@nestjs/testing';

import { TransactionUpdatedHandler } from 'src/transaction/application/event/transaction-updated.handler';
import {
  EventStore,
  IntegrationEventPublisher,
  IntegrationEventSubject,
} from 'src/transaction/application/event/integration';
import { InjectionToken } from 'src/transaction/application/injection.token';

import { TransactionUpdatedEvent } from 'src/transaction/domain/event/transaction-updated.event';

describe('TransactionUpdatedHandler', () => {
  let handler: TransactionUpdatedHandler;
  let logger: Logger;
  let publisher: IntegrationEventPublisher;
  let store: EventStore;

  beforeEach(async () => {
    const loggerProvider: Provider = {
      provide: Logger,
      useValue: {},
    };
    const publisherProvider: Provider = {
      provide: InjectionToken.INTEGRATION_EVENT_PUBLISHER,
      useValue: {},
    };
    const storeProvider: Provider = {
      provide: InjectionToken.EVENT_STORE,
      useValue: {},
    };
    const providers: Provider[] = [
      TransactionUpdatedHandler,
      loggerProvider,
      publisherProvider,
      storeProvider,
    ];
    const moduleMetadata: ModuleMetadata = { providers };
    const testModule = await Test.createTestingModule(moduleMetadata).compile();

    handler = testModule.get(TransactionUpdatedHandler);
    logger = testModule.get(Logger);
    publisher = testModule.get(InjectionToken.INTEGRATION_EVENT_PUBLISHER);
    store = testModule.get(InjectionToken.EVENT_STORE);
  });

  describe('handle', () => {
    it('should handle TransactionUpdated', async () => {
      logger.log = jest.fn();
      publisher.publish = jest.fn();
      store.save = jest.fn();

      const event = { transactionId: 'transactionId' } as TransactionUpdatedEvent;

      await expect(handler.handle(event)).resolves.toEqual(undefined);
      expect(logger.log).toBeCalledTimes(1);
      expect(logger.log).toBeCalledWith(
        `${IntegrationEventSubject.UPDATED}: ${JSON.stringify(event)}`,
      );
      expect(publisher.publish).toBeCalledTimes(1);
      expect(publisher.publish).toBeCalledWith({
        subject: IntegrationEventSubject.UPDATED,
        data: { id: event.transactionId },
      });
      expect(store.save).toBeCalledTimes(1);
      expect(store.save).toBeCalledWith({
        subject: IntegrationEventSubject.UPDATED,
        data: event,
      });
    });
  });
});

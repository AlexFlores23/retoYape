import { Logger, ModuleMetadata, Provider } from '@nestjs/common';
import { Test } from '@nestjs/testing';

import { TransactionCreatedHandler } from 'src/transaction/application/event/transaction-created.handler';
import {
  EventStore,
  IntegrationEventPublisher,
  IntegrationEventSubject,
} from 'src/transaction/application/event/integration';
import { InjectionToken } from 'src/transaction/application/injection.token';

import { TransactionCreatedEvent } from 'src/transaction/domain/event/transacion-created.event';

describe('TransactionCreatedHandler', () => {
  let handler: TransactionCreatedHandler;
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
      TransactionCreatedHandler,
      loggerProvider,
      publisherProvider,
      storeProvider,
    ];
    const moduleMetadata: ModuleMetadata = { providers };
    const testModule = await Test.createTestingModule(moduleMetadata).compile();

    handler = testModule.get(TransactionCreatedHandler);
    logger = testModule.get(Logger);
    publisher = testModule.get(InjectionToken.INTEGRATION_EVENT_PUBLISHER);
    store = testModule.get(InjectionToken.EVENT_STORE);
  });

  describe('handle', () => {
    it('should handle TransactionCreatedEvent', async () => {
      logger.log = jest.fn();
      publisher.publish = jest.fn();
      store.save = jest.fn();

      const event = { transactionId: 'transactionId' } as TransactionCreatedEvent;

      await expect(handler.handle(event)).resolves.toEqual(undefined);
      expect(logger.log).toBeCalledTimes(1);
      expect(logger.log).toBeCalledWith(
        `${IntegrationEventSubject.CREATED}: ${JSON.stringify(event)}`,
      );
      expect(publisher.publish).toBeCalledTimes(1);
      expect(publisher.publish).toBeCalledWith({
        subject: IntegrationEventSubject.CREATED,
        data: { id: event.transactionId },
      });
      expect(store.save).toBeCalledTimes(1);
      expect(store.save).toBeCalledWith({
        subject: IntegrationEventSubject.CREATED,
        data: event,
      });
    });
  });
});

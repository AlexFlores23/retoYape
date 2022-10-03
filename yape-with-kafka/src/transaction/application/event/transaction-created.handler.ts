import { Inject, Logger } from '@nestjs/common';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

import {
  EventStore,
  IntegrationEventPublisher,
  IntegrationEventSubject,
} from 'src/transaction/application/event/integration';
import { InjectionToken } from 'src/transaction/application/injection.token';

import { TransactionCreatedEvent } from 'src/transaction/domain/event/transacion-created.event';

@EventsHandler(TransactionCreatedEvent)
export class  TransactionCreatedHandler implements IEventHandler<TransactionCreatedEvent> {
  constructor(
    private readonly logger: Logger,
    @Inject(InjectionToken.INTEGRATION_EVENT_PUBLISHER)
    private readonly publisher: IntegrationEventPublisher,
    @Inject(InjectionToken.EVENT_STORE) private readonly eventStore: EventStore,
  ) {}

  async handle(event: TransactionCreatedEvent): Promise<void> {
    this.logger.log(
      `${IntegrationEventSubject.CREATED}: ${JSON.stringify(event)}`,
    );
    await this.publisher.publish({
      subject: IntegrationEventSubject.CREATED,
      data: { transactionId: event.transactionId },
    });
    await this.eventStore.save({
      subject: IntegrationEventSubject.CREATED,
      data: event,
    });

    
  }
}

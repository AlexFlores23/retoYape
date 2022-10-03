import { Inject, Logger } from '@nestjs/common';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

import {
  EventStore,
  IntegrationEventPublisher,
  IntegrationEventSubject,
} from 'src/transaction/application/event/integration';
import { InjectionToken } from 'src/transaction/application/injection.token';

import { TransactionUpdatedEvent } from 'src/transaction/domain/event/transaction-updated.event';

@EventsHandler(TransactionUpdatedEvent)
export class TransactionUpdatedHandler
  implements IEventHandler<TransactionUpdatedEvent>
{
  constructor(
    private readonly logger: Logger,
    @Inject(InjectionToken.INTEGRATION_EVENT_PUBLISHER)
    private readonly publisher: IntegrationEventPublisher,
    @Inject(InjectionToken.EVENT_STORE) private readonly eventStore: EventStore,
  ) {}

  async handle(event: TransactionUpdatedEvent): Promise<void> {
    this.logger.log(
      `${IntegrationEventSubject.UPDATED}: ${JSON.stringify(event)}`,
    );
    await this.publisher.publish({
      subject: IntegrationEventSubject.UPDATED,
      data: { id: event.transactionId },
    });
    await this.eventStore.save({
      subject: IntegrationEventSubject.UPDATED,
      data: event,
    });
  }
}

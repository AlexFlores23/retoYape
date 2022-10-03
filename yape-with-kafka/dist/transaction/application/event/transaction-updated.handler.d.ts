import { Logger } from '@nestjs/common';
import { IEventHandler } from '@nestjs/cqrs';
import { EventStore, IntegrationEventPublisher } from 'src/transaction/application/event/integration';
import { TransactionUpdatedEvent } from 'src/transaction/domain/event/transaction-updated.event';
export declare class TransactionUpdatedHandler implements IEventHandler<TransactionUpdatedEvent> {
    private readonly logger;
    private readonly publisher;
    private readonly eventStore;
    constructor(logger: Logger, publisher: IntegrationEventPublisher, eventStore: EventStore);
    handle(event: TransactionUpdatedEvent): Promise<void>;
}

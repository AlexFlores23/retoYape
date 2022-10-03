import { Logger } from '@nestjs/common';
import { IEventHandler } from '@nestjs/cqrs';
import { EventStore, IntegrationEventPublisher } from 'src/transaction/application/event/integration';
import { TransactionCreatedEvent } from 'src/transaction/domain/event/transacion-created.event';
export declare class TransactionCreatedHandler implements IEventHandler<TransactionCreatedEvent> {
    private readonly logger;
    private readonly publisher;
    private readonly eventStore;
    constructor(logger: Logger, publisher: IntegrationEventPublisher, eventStore: EventStore);
    handle(event: TransactionCreatedEvent): Promise<void>;
}

import { Logger } from '@nestjs/common';
import { IEventHandler } from '@nestjs/cqrs';
import { EventStore, IntegrationEventPublisher } from 'src/account/application/event/integration';
import { DepositedEvent } from 'src/account/domain/event/deposited.event';
export declare class DepositedHandler implements IEventHandler<DepositedEvent> {
    private readonly logger;
    private readonly publisher;
    private readonly eventStore;
    constructor(logger: Logger, publisher: IntegrationEventPublisher, eventStore: EventStore);
    handle(event: DepositedEvent): Promise<void>;
}

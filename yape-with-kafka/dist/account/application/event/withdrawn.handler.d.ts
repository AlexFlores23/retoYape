import { Logger } from '@nestjs/common';
import { IEventHandler } from '@nestjs/cqrs';
import { EventStore, IntegrationEventPublisher } from 'src/account/application/event/integration';
import { WithdrawnEvent } from 'src/account/domain/event/withdrawn.event';
export declare class WithdrawnHandler implements IEventHandler<WithdrawnEvent> {
    private readonly logger;
    private readonly publisher;
    private readonly eventStore;
    constructor(logger: Logger, publisher: IntegrationEventPublisher, eventStore: EventStore);
    handle(event: WithdrawnEvent): Promise<void>;
}

import { Logger } from '@nestjs/common';
import { IEventHandler } from '@nestjs/cqrs';
import { EventStore, IntegrationEventPublisher } from 'src/account/application/event/integration';
import { PasswordUpdatedEvent } from 'src/account/domain/event/password-updated.event';
export declare class PasswordUpdatedHandler implements IEventHandler<PasswordUpdatedEvent> {
    private readonly logger;
    private readonly publisher;
    private readonly eventStore;
    constructor(logger: Logger, publisher: IntegrationEventPublisher, eventStore: EventStore);
    handle(event: PasswordUpdatedEvent): Promise<void>;
}

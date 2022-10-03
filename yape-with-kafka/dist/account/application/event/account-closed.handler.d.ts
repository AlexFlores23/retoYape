import { Logger } from '@nestjs/common';
import { IEventHandler } from '@nestjs/cqrs';
import { EventStore, IntegrationEventPublisher } from 'src/account/application/event/integration';
import { AccountClosedEvent } from 'src/account/domain/event/account-closed.event';
export declare class AccountClosedHandler implements IEventHandler<AccountClosedEvent> {
    private readonly logger;
    private readonly publisher;
    private readonly eventStore;
    constructor(logger: Logger, publisher: IntegrationEventPublisher, eventStore: EventStore);
    handle(event: AccountClosedEvent): Promise<void>;
}

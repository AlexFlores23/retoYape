import { Logger } from '@nestjs/common';
import { IEventHandler } from '@nestjs/cqrs';
import { EventStore, IntegrationEventPublisher } from 'src/account/application/event/integration';
import { AccountOpenedEvent } from 'src/account/domain/event/account-opened.event';
export declare class AccountOpenedHandler implements IEventHandler<AccountOpenedEvent> {
    private readonly logger;
    private readonly publisher;
    private readonly eventStore;
    constructor(logger: Logger, publisher: IntegrationEventPublisher, eventStore: EventStore);
    handle(event: AccountOpenedEvent): Promise<void>;
}

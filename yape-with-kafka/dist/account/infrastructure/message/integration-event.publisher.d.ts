import { IntegrationEvent, IntegrationEventPublisher } from 'src/account/application/event/integration';
export declare class IntegrationEventPublisherImplement implements IntegrationEventPublisher {
    private static exchange;
    private readonly promisedChannel;
    constructor();
    publish(message: IntegrationEvent): Promise<void>;
    private static connect;
    private static createChannel;
    private static assertExchange;
}

import { TransactionProperties } from 'src/transaction/domain/transaction';
export declare class Event {
    readonly subject: string;
    readonly data: TransactionProperties;
}
export declare class IntegrationEvent {
    readonly subject: string;
    readonly data: Record<string, string>;
}
export interface IntegrationEventPublisher {
    publish: (event: IntegrationEvent) => Promise<void>;
}
export interface EventStore {
    save: (event: Event) => Promise<void>;
}
export declare enum IntegrationEventSubject {
    CREATED = "transaction.created",
    UPDATED = "transaction.updated"
}

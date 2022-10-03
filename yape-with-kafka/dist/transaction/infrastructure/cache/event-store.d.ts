import { Event, EventStore } from 'src/transaction/application/event/integration';
export declare class EventStoreImplement implements EventStore {
    private readonly master;
    private readonly slave;
    constructor();
    save(event: Event): Promise<void>;
    set(key: string, value: string): Promise<void>;
    get(key: string): Promise<string | null>;
    private failToConnectRedis;
}

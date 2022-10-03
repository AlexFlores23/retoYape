import { Event, EventStore } from 'src/account/application/event/integration';
export declare class EventStoreImplement implements EventStore {
    private readonly master;
    private readonly slave;
    constructor();
    save(event: Event): Promise<void>;
    set(key: string, value: string): Promise<void>;
    get(key: string): Promise<string | null>;
    private failToConnectRedis;
}

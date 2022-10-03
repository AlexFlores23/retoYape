import { EventPublisher } from '@nestjs/cqrs';
import { Account, AccountProperties } from 'src/account/domain/account';
export declare class AccountFactory {
    private readonly eventPublisher;
    constructor(eventPublisher: EventPublisher);
    create(id: string, name: string): Account;
    reconstitute(properties: AccountProperties): Account;
}

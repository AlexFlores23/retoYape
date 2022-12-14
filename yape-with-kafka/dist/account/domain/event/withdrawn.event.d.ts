import { IEvent } from '@nestjs/cqrs';
import { AccountProperties } from 'src/account/domain/account';
export declare class WithdrawnEvent implements IEvent, AccountProperties {
    readonly id: string;
    readonly name: string;
    readonly password: string;
    readonly balance: number;
    readonly openedAt: Date;
    readonly updatedAt: Date;
    readonly closedAt: Date | null;
    readonly version: number;
}

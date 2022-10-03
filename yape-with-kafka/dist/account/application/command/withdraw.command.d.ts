import { ICommand } from '@nestjs/cqrs';
declare class Properties {
    readonly id: string;
    readonly password: string;
    readonly amount: number;
}
export declare class WithdrawCommand extends Properties implements ICommand {
    constructor(properties: Properties);
}
export {};

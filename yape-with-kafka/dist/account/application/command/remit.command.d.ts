import { ICommand } from '@nestjs/cqrs';
declare class Properties {
    readonly id: string;
    readonly receiverId: string;
    readonly amount: number;
    readonly password: string;
}
export declare class RemitCommand extends Properties implements ICommand {
    constructor(properties: Properties);
}
export {};

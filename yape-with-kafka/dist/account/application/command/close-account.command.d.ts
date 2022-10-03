import { ICommand } from '@nestjs/cqrs';
export declare class CloseAccountCommand implements ICommand {
    readonly id: string;
    readonly password: string;
    constructor(id: string, password: string);
}

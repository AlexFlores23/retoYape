import { ICommand } from '@nestjs/cqrs';
export declare class OpenAccountCommand implements ICommand {
    readonly name: string;
    readonly password: string;
    constructor(name: string, password: string);
}

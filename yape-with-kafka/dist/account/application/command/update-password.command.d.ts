import { ICommand } from '@nestjs/cqrs';
declare class Properties {
    readonly id: string;
    readonly password: string;
    readonly newPassword: string;
}
export declare class UpdatePasswordCommand extends Properties implements ICommand {
    constructor(properties: Properties);
}
export {};

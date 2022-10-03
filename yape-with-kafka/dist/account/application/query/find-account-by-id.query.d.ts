import { IQuery } from '@nestjs/cqrs';
export declare class FindAccountByIdQuery implements IQuery {
    readonly id: string;
    constructor(id: string);
}

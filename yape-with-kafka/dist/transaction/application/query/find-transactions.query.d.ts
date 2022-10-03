import { IQuery } from '@nestjs/cqrs';
export declare class FindTransactionsQuery implements IQuery {
    readonly offset: number;
    readonly limit: number;
    constructor(offset: number, limit: number);
}

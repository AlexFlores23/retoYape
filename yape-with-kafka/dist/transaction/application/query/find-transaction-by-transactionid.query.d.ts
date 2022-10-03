import { IQuery } from '@nestjs/cqrs';
export declare class FindTransactionByTransactionIdQuery implements IQuery {
    readonly transactionId: string;
    constructor(transactionId: string);
}

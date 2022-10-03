import { ICommand } from '@nestjs/cqrs';
export declare class SaveTransactionCommand implements ICommand {
    readonly transactionId: string;
    readonly transactionType: number;
    readonly transactionAccount: number;
    readonly transactionAmount: number;
    constructor(transactionId: string, transactionType: number, transactionAccount: number, transactionAmount: number);
}

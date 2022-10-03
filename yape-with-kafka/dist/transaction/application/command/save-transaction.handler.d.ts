import { ICommandHandler } from '@nestjs/cqrs';
import { SaveTransactionCommand } from 'src/transaction/application/command/save-transaction.command';
import { TransactionFactory } from 'src/transaction/domain/factory';
import { TransactionRepository } from 'src/transaction/domain/repository';
export declare class SaveTransactionHandler implements ICommandHandler<SaveTransactionCommand, void> {
    private readonly transactionRepository;
    private readonly transactionFactory;
    constructor(transactionRepository: TransactionRepository, transactionFactory: TransactionFactory);
    execute(command: SaveTransactionCommand): Promise<void>;
}

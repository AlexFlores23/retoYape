import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { SaveTransactionCommand } from 'src/transaction/application/command/save-transaction.command';
import { InjectionToken } from 'src/transaction/application/injection.token';

import { TransactionFactory } from 'src/transaction/domain/factory';
import { TransactionRepository } from 'src/transaction/domain/repository';

@CommandHandler(SaveTransactionCommand)
export class SaveTransactionHandler
  implements ICommandHandler<SaveTransactionCommand, void>
{
  constructor(
    @Inject(InjectionToken.TRANSACTION_REPOSITORY)
    private readonly transactionRepository: TransactionRepository,
    private readonly transactionFactory: TransactionFactory,
  ) {}

  async execute(command: SaveTransactionCommand): Promise<void> {
    const transaction = this.transactionFactory.create(
      await this.transactionRepository.newTransactionId(),
      command.transactionType,
      command.transactionAccount,
      command.transactionAmount
    );

    transaction.create(); // eso se usa para crear el evento
    await this.transactionRepository.save(transaction);

    transaction.commit();
  }

}

import { ICommand } from '@nestjs/cqrs';

export class SaveTransactionCommand implements ICommand {
  constructor(readonly transactionId: string, readonly transactionType: number, readonly transactionAccount: number, readonly transactionAmount: number) {}
}

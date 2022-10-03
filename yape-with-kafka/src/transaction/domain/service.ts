import { Transaction } from 'src/transaction/domain/transaction';
import { UpdateManyOptions } from 'typeorm';

export class RemittanceOptions {
  readonly password: string;
  readonly transaction: Transaction;
  readonly receiver: Transaction;
  readonly amount: number;
}

export class UpdateOptions {
  readonly transaction: Transaction;
}

export class TransactionService {
  /*remit({ transaction, receiver, password, amount }: RemittanceOptions): void {
    transaction.withdraw(amount, password);
    receiver.deposit(amount);
  }*/

  update({transaction}:UpdateOptions):void{
    transaction.update();
    ;
  }

}

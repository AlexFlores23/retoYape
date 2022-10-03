import { Transaction } from 'src/transaction/domain/transaction';
import { TransactionService, RemittanceOptions, UpdateOptions } from 'src/transaction/domain/service';

describe('TransactionService', () => {
  describe('remit', () => {
    it('should run update', () => {
      const service = new TransactionService();

      const transaction = { create: jest.fn() } as unknown as Transaction;

      const options: UpdateOptions = {
        transaction
      };

      expect(service.update(options)).toEqual(undefined);
      expect(transaction.update).toBeCalledTimes(1);
      expect(transaction.update).toBeCalledWith();
      
    });


  });
});

import {
  InternalServerErrorException,
  UnauthorizedException,
  UnprocessableEntityException,
} from '@nestjs/common';

import { TransactionImplement } from 'src/transaction/domain/transaction';
import { TransactionCreatedEvent } from 'src/transaction/domain/event/transacion-created.event';
import { TransactionUpdatedEvent } from 'src/transaction/domain/event/transaction-updated.event';
import { version } from 'os';

describe('Transaction', () => {
  describe('properties', () => {
    it('should return TransactionProperties', () => {
      const properties = {
        transactionId: 'transactionId',
        transactionType: 0,
        transactionAccount: 0,
        transactionAmount: 0,
        transactionStatus: 0,
        createdAt: expect.anything(),
        updatedAt: expect.anything()
      };

      const transaction = new TransactionImplement({ transactionId: 'transactionId', transactionType: 0, transactionAccount: 0, transactionAmount: 0 });

      const result = transaction.properties();

      expect(result).toEqual(properties);
    });
  });

  describe('create', () => {
    it('should apply TransactionCreatedEvent', () => {
      const transaction = new TransactionImplement({ 
        transactionId: 'transactionId',
        transactionType: 0,
        transactionAccount: 0,
        transactionAmount: 0,
        transactionStatus: 0,
        createdAt: expect.anything(),
        updatedAt: expect.anything()
      });

      transaction.create();

      const result = transaction.getUncommittedEvents();

      expect(result).toEqual([
        Object.assign(new TransactionCreatedEvent(), transaction),
      ]);
    });
  });

  describe('update', () => {
    it('should apply TransactionCreatedEvent', () => {
      const transaction = new TransactionImplement({ 
        transactionId: 'transactionId',
        transactionType: 0,
        transactionAccount: 0,
        transactionAmount: 0,
        transactionStatus: 0,
        createdAt: expect.anything(),
        updatedAt: expect.anything()
      });

      transaction.update();

      const result = transaction.getUncommittedEvents();

      expect(result).toEqual([
        Object.assign(new TransactionUpdatedEvent(), transaction),
      ]);
    });
  });

  

});

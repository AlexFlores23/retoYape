import {
  UnprocessableEntityException,
  UnauthorizedException,
  InternalServerErrorException,
} from '@nestjs/common';
import { AggregateRoot } from '@nestjs/cqrs';
import * as bcrypt from 'bcrypt';

import { ErrorMessage } from 'src/transaction/domain/error';
import { TransactionCreatedEvent } from 'src/transaction/domain/event/transacion-created.event';
import { TransactionUpdatedEvent } from 'src/transaction/domain/event/transaction-updated.event';

export type TransactionEssentialProperties = Required<{
  readonly transactionId: string;
  readonly transactionType: number;
  readonly transactionAccount: number;
  readonly transactionAmount: number;
}>;

export type TransactionOptionalProperties = Partial<{
  readonly transactionId: string;
  readonly transactionType: number;
  readonly transactionAccount: number;
  readonly transactionAmount: number;
  readonly transactionStatus: number;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}>;

export type TransactionProperties = TransactionEssentialProperties &
  Required<TransactionOptionalProperties>;

export interface Transaction {
  properties: () => TransactionProperties;
  compareTransactionId: (transactionId: string) => boolean;
  create: () => void; 
  update: () => void;
  commit: () => void;
}

export class TransactionImplement extends AggregateRoot implements Transaction {
  private readonly transactionId: string;
  private readonly transactionType: number;
  private readonly transactionAccount: number;
  private readonly transactionAmount: number;
  private readonly transactionStatus: number;
  private createdAt: Date = new Date();
  private updatedAt: Date = new Date();

  constructor(
    properties: TransactionEssentialProperties & TransactionOptionalProperties,
  ) {
    super();
    Object.assign(this, properties);
  }

  properties(): TransactionProperties {
    return {
      transactionId: this.transactionId,
      transactionType: this.transactionType,
      transactionAccount: this.transactionAccount,
      transactionAmount: this.transactionAmount,
      transactionStatus: this.transactionStatus,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }

  compareTransactionId(transactionId: string): boolean {
    return transactionId === this.transactionId;
  }

  create(): void {    
    this.createdAt = new Date();
    this.apply(Object.assign(new TransactionCreatedEvent(), this));
  }

  update(): void {    
    this.updatedAt = new Date();
    this.apply(Object.assign(new TransactionUpdatedEvent(), this));
  }
}

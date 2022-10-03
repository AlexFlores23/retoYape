import { getRepository } from 'typeorm';
import { Injectable } from '@nestjs/common';

import { TransactionEntity } from 'src/transaction/infrastructure/entity/transaction.entity';

import {
  Transaction,
  TransactionQuery,
  Transactions,
} from 'src/transaction/application/query/transaction.query';

@Injectable()
export class TransactionQueryImplement implements TransactionQuery {
  async findByTransactionId(id: string): Promise<undefined | Transaction> {
    return this.convertTransactionFromEntity(
      await getRepository(TransactionEntity).findOne(id),
    );
  }

  async find(offset: number, limit: number): Promise<Transactions> {
    return this.convertTransactionsFromEntities(
      await getRepository(TransactionEntity).find({ skip: offset, take: limit }),
    );
  }

  private convertTransactionFromEntity(
    entity?: TransactionEntity,
  ): undefined | Transaction {
    return entity
      ? { ...entity, createdAt: entity.createdAt, updatedAt: entity.updatedAt }
      : undefined;
  }

  private convertTransactionsFromEntities(entities: TransactionEntity[]): Transactions {
    return entities.map((entity) => ({
      ...entity,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    }));
  }
}

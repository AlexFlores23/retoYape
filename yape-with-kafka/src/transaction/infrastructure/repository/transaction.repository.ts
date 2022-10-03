import { getRepository, In } from 'typeorm';
import { Inject } from '@nestjs/common';

import { TransactionEntity } from 'src/transaction/infrastructure/entity/transaction.entity';

import { TransactionRepository } from 'src/transaction/domain/repository';
import { Transaction } from 'src/transaction/domain/transaction';
import { TransactionFactory } from 'src/transaction/domain/factory';

export class TransactionRepositoryImplement implements TransactionRepository {
  constructor(
    @Inject(TransactionFactory) private readonly transactionFactory: TransactionFactory,
  ) {}

  async newTransactionId(): Promise<string> {
    const emptyEntity = new TransactionEntity();
    const entity = await getRepository(TransactionEntity).save(emptyEntity);
    return entity.transactionId;
  }

  async save(data: Transaction | Transaction[]): Promise<void> {
    const models = Array.isArray(data) ? data : [data];
    const entities = models.map((model) => this.modelToEntity(model));
    await getRepository(TransactionEntity).save(entities);
  }

  async findByTransactionId(transactionId: string): Promise<Transaction | null> {
    const entity = await getRepository(TransactionEntity).findOne({ transactionId });
    return entity ? this.entityToModel(entity) : null;
  }

  async findByTransactionIds(transactionIds: string[]): Promise<Transaction[]> {
    const entities = await getRepository(TransactionEntity).find({ transactionId: In(transactionIds) });
    return entities.map((entity) => this.entityToModel(entity));
  }
/*
  async findByName(name: string): Promise<Transaction[]> {
    const entities = await getRepository(TransactionEntity).find({ name });
    return entities.map((entity) => this.entityToModel(entity));
  }
*/

  private modelToEntity(model: Transaction): TransactionEntity {
    const properties = model.properties();
    return {
      ...properties,
      createdAt: properties.createdAt,
      updatedAt: properties.updatedAt,
    };
  }

  private entityToModel(entity: TransactionEntity): Transaction {
    return this.transactionFactory.reconstitute({
      ...entity,
      createdAt: entity.createdAt,
      updatedAt: entity.createdAt,
    });
  }
}

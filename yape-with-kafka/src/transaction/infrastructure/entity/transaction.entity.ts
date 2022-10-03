import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

import { BaseEntity } from 'src/transaction/infrastructure/entity/base.entity';

@Entity()
export class TransactionEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  transactionId!: string;

  @Column({ type: 'int' })
  transactionType = 0;

  @Column({ type: 'int' })
  transactionAccount = 0;

  @Column({ type: 'int' })
  transactionAmount = 0;

  @Column({ type: 'int' })
  transactionStatus = 0;
  
 
}

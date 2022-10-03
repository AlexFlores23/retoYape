export class Transaction {
  readonly transactionId: string;
  readonly transactionType: number;
  readonly transactionAccount: number;
  readonly transactionAmount: number;
  readonly transactionStatus: number;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

export class ItemInTransactions {
  readonly transactionId: string;
  readonly transactionType: number;
  readonly transactionAccount: number;
  readonly transactionAmount: number;
  readonly transactionStatus: number;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

export class Transactions extends Array<ItemInTransactions> {}

export interface TransactionQuery {
  findByTransactionId: (id: string) => Promise<Transaction | undefined>;
  find: (offset: number, limit: number) => Promise<Transactions>;
}

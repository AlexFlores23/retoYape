import { ApiProperty } from '@nestjs/swagger';

import {
  FindTransactionsResult,
  ItemInFindTransactionsResult,
} from 'src/transaction/application/query/find-transactions.result';

class FindTransactionsItem extends  ItemInFindTransactionsResult {
  @ApiProperty({ format: 'uuid' })
  readonly transactionId: string;

  @ApiProperty({ example: 100 })
  readonly transactionType: number;

  @ApiProperty({ example: 100 })
  readonly transactionAccount: number;

  @ApiProperty({ example: 100 })
  readonly transactionAmount: number;

  @ApiProperty({ example: 100 })
  readonly transactionStatus: number;
}

export class FindTransactionsResponseDTO {
  @ApiProperty({ type: [FindTransactionsItem] })
  readonly transactions:   FindTransactionsResult;
}

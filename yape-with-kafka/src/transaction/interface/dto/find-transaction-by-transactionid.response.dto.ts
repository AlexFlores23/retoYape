import { ApiProperty } from '@nestjs/swagger';

import { FindTransactionByTransactionIdResult } from 'src/transaction/application/query/find-transaction-by-transactionid.result';

export class FindTransactionByTransactionIdResponseDTO extends FindTransactionByTransactionIdResult {
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

  @ApiProperty()
  readonly createdAt: Date;

  @ApiProperty()
  readonly updatedAt: Date;

}

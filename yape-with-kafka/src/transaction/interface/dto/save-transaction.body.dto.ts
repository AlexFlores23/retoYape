import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength, MinLength } from 'class-validator';

export class SaveTransactionDTO {
  
  @ApiProperty({ type: String })
  readonly transactionId: string;

  @ApiProperty({ type: Number })
  readonly transactionType: number;

  @ApiProperty({ type: Number  })
  readonly transactionAccount: number;

  @ApiProperty({ type: Number  })
  readonly transactionAmount: number;
  
  @ApiProperty({ type: Number })
  readonly transactionStatus: number;


}

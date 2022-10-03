import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength, MinLength } from 'class-validator';

export class UpdateTransactionBodyDTO {
  
  @ApiProperty({ type: Number })
  readonly transactionStatus: number;
}

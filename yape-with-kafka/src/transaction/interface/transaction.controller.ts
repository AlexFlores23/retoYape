import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import {
  ApiBadRequestResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiResponse,
  ApiTags,
  ApiUnauthorizedResponse,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';


import { FindTransactionsQueryDTO } from 'src/transaction/interface/dto/find-transactions.query.dto';
import { SaveTransactionDTO } from 'src/transaction/interface/dto/save-transaction.body.dto';
import { UpdateTransactionBodyDTO } from 'src/transaction/interface/dto/update-transaction.body.dto';
import { UpdateTransactionParamDTO } from 'src/transaction/interface/dto/update-transaction.param.dto';
import { FindTransactionByTransactionIdParamDTO } from 'src/transaction/interface/dto/find-transaction-by-transactionid.param.dto';
import { FindTransactionByTransactionIdResponseDTO } from 'src/transaction/interface/dto/find-transaction-by-transactionid.response.dto';
import { FindTransactionsResponseDTO } from 'src/transaction/interface/dto/find-transactions.response.dto';
import { ResponseDescription } from 'src/transaction/interface/response-description';


import { SaveTransactionCommand } from 'src/transaction/application/command/save-transaction.command';
//import { Upda } from 'src/transaction/application/command/update-password.command';
import { FindTransactionByTransactionIdQuery } from 'src/transaction/application/query/find-transaction-by-transactionid.query';
import { FindTransactionsQuery } from 'src/transaction/application/query/find-transactions.query';

@ApiTags('Transactions')
@Controller('transactions')
export class TransactionController {
  constructor(readonly commandBus: CommandBus, readonly queryBus: QueryBus) {}

  @Post()
  @ApiResponse({ status: 201, description: ResponseDescription.CREATED })
  @ApiBadRequestResponse({ description: ResponseDescription.BAD_REQUEST })
  @ApiInternalServerErrorResponse({
    description: ResponseDescription.INTERNAL_SERVER_ERROR,
  })
  async saveTransaction(@Body() body: SaveTransactionDTO): Promise<void> {
    const command = new SaveTransactionCommand(body.transactionId, body.transactionType, body.transactionAccount, body.transactionAmount);
    await this.commandBus.execute(command);
  }

  

  @Get()
  @ApiResponse({
    status: 200,
    description: ResponseDescription.OK,
    type: FindTransactionsResponseDTO,
  })
  @ApiBadRequestResponse({ description: ResponseDescription.BAD_REQUEST })
  @ApiInternalServerErrorResponse({
    description: ResponseDescription.INTERNAL_SERVER_ERROR,
  })
  async findTransactions(
    @Query() queryDto: FindTransactionsQueryDTO,
  ): Promise<FindTransactionsResponseDTO> {
    const query = new FindTransactionsQuery(queryDto.offset, queryDto.limit);
    return { transactions: await this.queryBus.execute(query) };
  }

  @Get('/:transactionId')
  @ApiResponse({
    status: 200,
    description: ResponseDescription.OK,
    type: FindTransactionByTransactionIdResponseDTO,
  })
  @ApiBadRequestResponse({ description: ResponseDescription.BAD_REQUEST })
  @ApiNotFoundResponse({ description: ResponseDescription.NOT_FOUND })
  @ApiInternalServerErrorResponse({
    description: ResponseDescription.INTERNAL_SERVER_ERROR,
  })
  async findTransactionsByTransactionId(
    @Param() param: FindTransactionByTransactionIdParamDTO,
  ): Promise<FindTransactionByTransactionIdResponseDTO> {
    const query = new FindTransactionByTransactionIdQuery(param.transactionId);
    return this.queryBus.execute(query);
  }
}

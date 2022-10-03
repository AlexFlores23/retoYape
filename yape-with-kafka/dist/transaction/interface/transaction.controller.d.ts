import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { FindTransactionsQueryDTO } from 'src/transaction/interface/dto/find-transactions.query.dto';
import { SaveTransactionDTO } from 'src/transaction/interface/dto/save-transaction.body.dto';
import { FindTransactionByTransactionIdParamDTO } from 'src/transaction/interface/dto/find-transaction-by-transactionid.param.dto';
import { FindTransactionByTransactionIdResponseDTO } from 'src/transaction/interface/dto/find-transaction-by-transactionid.response.dto';
import { FindTransactionsResponseDTO } from 'src/transaction/interface/dto/find-transactions.response.dto';
export declare class TransactionController {
    readonly commandBus: CommandBus;
    readonly queryBus: QueryBus;
    constructor(commandBus: CommandBus, queryBus: QueryBus);
    saveTransaction(body: SaveTransactionDTO): Promise<void>;
    findTransactions(queryDto: FindTransactionsQueryDTO): Promise<FindTransactionsResponseDTO>;
    findTransactionsByTransactionId(param: FindTransactionByTransactionIdParamDTO): Promise<FindTransactionByTransactionIdResponseDTO>;
}

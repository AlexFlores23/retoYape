import { Logger, Module, Provider } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { EventStoreImplement } from 'src/transaction/infrastructure/cache/event-store';
import { IntegrationEventPublisherImplement } from 'src/transaction/infrastructure/message/integration-event.publisher';
import { TransactionQueryImplement } from 'src/transaction/infrastructure/query/transaction.query';
import { TransactionRepositoryImplement } from 'src/transaction/infrastructure/repository/transaction.repository';

import { TransactionController } from 'src/transaction/interface/transaction.controller';


import { SaveTransactionHandler } from 'src/transaction/application/command/save-transaction.handler';
//import { UpdateTransactionHandler } from 'src/transaction/application/command/update-transaction.handler';
import { TransactionCreatedHandler } from 'src/transaction/application/event/transaction-created.handler';
import { TransactionUpdatedHandler } from 'src/transaction/application/event/transaction-updated.handler';
import { FindTransactionByTransactionIdHandler } from 'src/transaction/application/query/find-transaction-by-transactionid.handler';
import { FindTransactionsHandler } from 'src/transaction/application/query/find-transactions.handler';

import { TransactionService } from 'src/transaction/domain/service';
import { TransactionFactory } from 'src/transaction/domain/factory';
import { InjectionToken } from './application/injection.token';

const infrastructure: Provider[] = [
  {
    provide: InjectionToken.TRANSACTION_REPOSITORY,
    useClass: TransactionRepositoryImplement,
  },
  {
    provide: InjectionToken.INTEGRATION_EVENT_PUBLISHER,
    useClass: IntegrationEventPublisherImplement,
  },
  {
    provide: InjectionToken.EVENT_STORE,
    useClass: EventStoreImplement,
  },
  {
    provide: InjectionToken.TRANSACION_QUERY,
    useClass: TransactionQueryImplement,
  },
];

const application = [
  SaveTransactionHandler,
  //UpdateTransactionHandler,
  TransactionCreatedHandler,
  TransactionUpdatedHandler,
  FindTransactionByTransactionIdHandler,
  FindTransactionsHandler,
];

const domain = [TransactionService, TransactionFactory];

@Module({
  imports: [CqrsModule],
  controllers: [TransactionController],
  providers: [Logger, ...infrastructure, ...application, ...domain],
})
export class TransactionsModule {}

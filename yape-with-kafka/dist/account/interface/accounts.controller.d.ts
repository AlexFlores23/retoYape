import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { DepositBodyDTO } from 'src/account/interface/dto/deposit.body.dto';
import { FindAccountsQueryDTO } from 'src/account/interface/dto/find-accounts.query.dto';
import { OpenAccountBodyDTO } from 'src/account/interface/dto/open-account.body.dto';
import { UpdatePasswordBodyDTO } from 'src/account/interface/dto/update-password.body.dto';
import { WithdrawBodyDTO } from 'src/account/interface/dto/withdraw.body.dto';
import { RemitBodyDTO } from 'src/account/interface/dto/remit.body.dto';
import { WithdrawParamDTO } from 'src/account/interface/dto/withdraw.param.dto';
import { DepositParamDTO } from 'src/account/interface/dto/deposit.param.dto';
import { RemitParamDTO } from 'src/account/interface/dto/remit.param.dto';
import { UpdatePasswordParamDTO } from 'src/account/interface/dto/update-password.param.dto';
import { DeleteAccountParamDTO } from 'src/account/interface/dto/delete-account.param.dto';
import { DeleteAccountQueryDTO } from 'src/account/interface/dto/delete-account.query.dto';
import { FindAccountByIdParamDTO } from 'src/account/interface/dto/find-account-by-id.param.dto';
import { FindAccountByIdResponseDTO } from 'src/account/interface/dto/find-account-by-id.response.dto';
import { FindAccountsResponseDTO } from 'src/account/interface/dto/find-accounts.response.dto';
export declare class AccountsController {
    readonly commandBus: CommandBus;
    readonly queryBus: QueryBus;
    constructor(commandBus: CommandBus, queryBus: QueryBus);
    openAccount(body: OpenAccountBodyDTO): Promise<void>;
    withdraw(param: WithdrawParamDTO, body: WithdrawBodyDTO): Promise<void>;
    deposit(param: DepositParamDTO, body: DepositBodyDTO): Promise<void>;
    remit(param: RemitParamDTO, body: RemitBodyDTO): Promise<void>;
    updatePassword(param: UpdatePasswordParamDTO, body: UpdatePasswordBodyDTO): Promise<void>;
    closeAccount(param: DeleteAccountParamDTO, query: DeleteAccountQueryDTO): Promise<void>;
    findAccounts(queryDto: FindAccountsQueryDTO): Promise<FindAccountsResponseDTO>;
    findAccountById(param: FindAccountByIdParamDTO): Promise<FindAccountByIdResponseDTO>;
}

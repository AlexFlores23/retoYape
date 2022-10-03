import { ICommandHandler } from '@nestjs/cqrs';
import { DepositCommand } from 'src/account/application/command/deposit.command';
import { AccountRepository } from 'src/account/domain/repository';
export declare class DepositHandler implements ICommandHandler<DepositCommand, void> {
    private readonly accountRepository;
    constructor(accountRepository: AccountRepository);
    execute(command: DepositCommand): Promise<void>;
}

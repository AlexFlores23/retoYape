import { ICommandHandler } from '@nestjs/cqrs';
import { WithdrawCommand } from 'src/account/application/command/withdraw.command';
import { AccountRepository } from 'src/account/domain/repository';
export declare class WithdrawHandler implements ICommandHandler<WithdrawCommand, void> {
    private readonly accountRepository;
    constructor(accountRepository: AccountRepository);
    execute(command: WithdrawCommand): Promise<void>;
}

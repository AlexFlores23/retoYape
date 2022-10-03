import { ICommandHandler } from '@nestjs/cqrs';
import { CloseAccountCommand } from 'src/account/application/command/close-account.command';
import { AccountRepository } from 'src/account/domain/repository';
export declare class CloseAccountHandler implements ICommandHandler<CloseAccountCommand, void> {
    private readonly accountRepository;
    constructor(accountRepository: AccountRepository);
    execute(command: CloseAccountCommand): Promise<void>;
}

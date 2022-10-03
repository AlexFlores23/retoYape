import { ICommandHandler } from '@nestjs/cqrs';
import { OpenAccountCommand } from 'src/account/application/command/open-account.command';
import { AccountFactory } from 'src/account/domain/factory';
import { AccountRepository } from 'src/account/domain/repository';
export declare class OpenAccountHandler implements ICommandHandler<OpenAccountCommand, void> {
    private readonly accountRepository;
    private readonly accountFactory;
    constructor(accountRepository: AccountRepository, accountFactory: AccountFactory);
    execute(command: OpenAccountCommand): Promise<void>;
}

import { ICommandHandler } from '@nestjs/cqrs';
import { RemitCommand } from 'src/account/application/command/remit.command';
import { AccountRepository } from 'src/account/domain/repository';
import { AccountService } from 'src/account/domain/service';
export declare class RemitHandler implements ICommandHandler<RemitCommand, void> {
    private readonly accountRepository;
    private readonly accountService;
    constructor(accountRepository: AccountRepository, accountService: AccountService);
    execute(command: RemitCommand): Promise<void>;
}

import { ICommandHandler } from '@nestjs/cqrs';
import { UpdatePasswordCommand } from 'src/account/application/command/update-password.command';
import { AccountRepository } from 'src/account/domain/repository';
export declare class UpdatePasswordHandler implements ICommandHandler<UpdatePasswordCommand, void> {
    private readonly accountRepository;
    constructor(accountRepository: AccountRepository);
    execute(command: UpdatePasswordCommand): Promise<void>;
}

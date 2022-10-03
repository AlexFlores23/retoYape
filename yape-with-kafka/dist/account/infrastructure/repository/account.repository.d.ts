import { AccountRepository } from 'src/account/domain/repository';
import { Account } from 'src/account/domain/account';
import { AccountFactory } from 'src/account/domain/factory';
export declare class AccountRepositoryImplement implements AccountRepository {
    private readonly accountFactory;
    constructor(accountFactory: AccountFactory);
    newId(): Promise<string>;
    save(data: Account | Account[]): Promise<void>;
    findById(id: string): Promise<Account | null>;
    findByIds(ids: string[]): Promise<Account[]>;
    findByName(name: string): Promise<Account[]>;
    private modelToEntity;
    private entityToModel;
}

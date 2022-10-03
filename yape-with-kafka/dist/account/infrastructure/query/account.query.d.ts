import { Account, AccountQuery, Accounts } from 'src/account/application/query/account.query';
export declare class AccountQueryImplement implements AccountQuery {
    findById(id: string): Promise<undefined | Account>;
    find(offset: number, limit: number): Promise<Accounts>;
    private convertAccountFromEntity;
    private convertAccountsFromEntities;
}

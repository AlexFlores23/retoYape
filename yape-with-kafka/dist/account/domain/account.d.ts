import { AggregateRoot } from '@nestjs/cqrs';
export declare type AccountEssentialProperties = Required<{
    readonly id: string;
    readonly name: string;
}>;
export declare type AccountOptionalProperties = Partial<{
    readonly password: string;
    readonly balance: number;
    readonly openedAt: Date;
    readonly updatedAt: Date;
    readonly closedAt: Date | null;
    readonly version: number;
}>;
export declare type AccountProperties = AccountEssentialProperties & Required<AccountOptionalProperties>;
export interface Account {
    properties: () => AccountProperties;
    compareId: (id: string) => boolean;
    open: (password: string) => void;
    updatePassword: (password: string, data: string) => void;
    withdraw: (amount: number, password: string) => void;
    deposit: (amount: number) => void;
    close: (password: string) => void;
    commit: () => void;
}
export declare class AccountImplement extends AggregateRoot implements Account {
    private readonly id;
    private readonly name;
    private password;
    private balance;
    private readonly openedAt;
    private updatedAt;
    private closedAt;
    private version;
    constructor(properties: AccountEssentialProperties & AccountOptionalProperties);
    properties(): AccountProperties;
    compareId(id: string): boolean;
    open(password: string): void;
    private setPassword;
    updatePassword(password: string, data: string): void;
    withdraw(amount: number, password: string): void;
    deposit(amount: number): void;
    close(password: string): void;
    private comparePassword;
}

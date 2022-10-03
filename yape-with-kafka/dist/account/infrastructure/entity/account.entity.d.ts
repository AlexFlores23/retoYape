import { BaseEntity } from 'src/account/infrastructure/entity/base.entity';
export declare class AccountEntity extends BaseEntity {
    id: string;
    name: string;
    password: string;
    balance: number;
}

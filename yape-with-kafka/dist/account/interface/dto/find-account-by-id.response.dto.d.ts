import { FindAccountByIdResult } from 'src/account/application/query/find-account-by-id.result';
export declare class FindAccountByIdResponseDTO extends FindAccountByIdResult {
    readonly id: string;
    readonly name: string;
    readonly balance: number;
    readonly openedAt: Date;
    readonly updatedAt: Date;
    readonly closedAt: Date | null;
}

import { IQueryResult } from '@nestjs/cqrs';
export declare class FindAccountByIdResult implements IQueryResult {
    readonly id: string;
    readonly name: string;
    readonly balance: number;
    readonly openedAt: Date;
    readonly updatedAt: Date;
    readonly closedAt: Date | null;
}

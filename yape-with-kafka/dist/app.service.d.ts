import { OnModuleDestroy, OnModuleInit } from '@nestjs/common';
declare class RedisConfig {
    readonly host: string;
    readonly port: number;
}
declare class RedisClusterConfig {
    readonly master: RedisConfig;
    readonly slave: RedisConfig;
}
export declare class RabbitMQConfig {
    readonly exchange: string;
    readonly hostname: string;
    readonly username: string;
    readonly password: string;
}
export declare class AppService implements OnModuleInit, OnModuleDestroy {
    private databaseConnection?;
    static port(): number;
    static redisClusterConfig(): RedisClusterConfig;
    static rabbitMQConfig(): RabbitMQConfig;
    onModuleInit(): Promise<void>;
    private loadDBConfig;
    private failToConnectDatabase;
    onModuleDestroy(): Promise<void>;
}
export {};

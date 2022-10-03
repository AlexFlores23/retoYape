"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = exports.RabbitMQConfig = void 0;
const typeorm_1 = require("typeorm");
const transaction_entity_1 = require("./transaction/infrastructure/entity/transaction.entity");
class DBConfig {
}
class RedisConfig {
}
class RedisClusterConfig {
}
class RabbitMQConfig {
}
exports.RabbitMQConfig = RabbitMQConfig;
class AppService {
    static port() {
        const { PORT } = process.env;
        return PORT && Number(PORT) ? Number(PORT) : 5001;
    }
    static redisClusterConfig() {
        const { REDIS_MASTER_PORT, REDIS_MASTER_HOST } = process.env;
        const masterHost = REDIS_MASTER_HOST ? REDIS_MASTER_HOST : 'localhost';
        const masterPort = Number(REDIS_MASTER_PORT)
            ? Number(REDIS_MASTER_PORT)
            : 6379;
        const master = { host: masterHost, port: masterPort };
        const { REDIS_SLAVE_HOST, REDIS_SLAVE_PORT } = process.env;
        const slaveHost = REDIS_SLAVE_HOST ? REDIS_SLAVE_HOST : 'localhost';
        const slavePort = Number(process.env.REDIS_SLAVE_PORT)
            ? Number(REDIS_SLAVE_PORT)
            : 6379;
        const slave = { host: slaveHost, port: slavePort };
        return { master, slave };
    }
    static rabbitMQConfig() {
        return {
            exchange: process.env.RABBIT_MQ_EXCHANGE || 'example-exchange',
            hostname: process.env.RABBIT_MQ_HOSTNAME || 'localhost',
            username: process.env.RABBIT_MQ_USER_NAME || 'root',
            password: process.env.RABBIT_MQ_PASSWORD || 'test',
        };
    }
    async onModuleInit() {
        const entities = [transaction_entity_1.TransactionEntity];
        this.databaseConnection = await (0, typeorm_1.createConnection)({
            ...this.loadDBConfig(),
            type: 'mysql',
            entities,
        }).catch((error) => this.failToConnectDatabase(error));
    }
    loadDBConfig() {
        return {
            host: process.env.DATABASE_HOST || 'localhost',
            port: parseInt(process.env.DATABASE_PORT ?? '3306', 10) || 3306,
            database: process.env.DATABASE_NAME || 'yape',
            username: process.env.DATABASE_USER || 'root',
            password: process.env.DATABASE_PASSWORD || 'password',
            synchronize: 'true' === process.env.DATABASE_SYNC || true,
            logging: 'true' === process.env.DATABASE_LOGGING || true,
        };
    }
    failToConnectDatabase(error) {
        console.error(error);
        process.exit(1);
    }
    async onModuleDestroy() {
        if (this.databaseConnection)
            await this.databaseConnection.close();
    }
}
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map
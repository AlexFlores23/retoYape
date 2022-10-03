"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventStoreImplement = void 0;
const ioredis_1 = require("ioredis");
const app_service_1 = require("../../../app.service");
class EventStoreImplement {
    constructor() {
        const { master, slave } = app_service_1.AppService.redisClusterConfig();
        this.master = new ioredis_1.default(master.port, master.host).on('error', this.failToConnectRedis);
        this.slave = new ioredis_1.default(slave.port, slave.host).on('error', this.failToConnectRedis);
    }
    async save(event) {
        await this.master.set(event.data.id, JSON.stringify(event.data));
    }
    async set(key, value) {
        await this.master.set(key, value, 'EX', 1);
    }
    async get(key) {
        return this.slave
            .get(key)
            .then((result) => result)
            .catch(() => null);
    }
    failToConnectRedis(error) {
        console.error(error);
        process.exit(1);
    }
}
exports.EventStoreImplement = EventStoreImplement;
//# sourceMappingURL=event-store.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var IntegrationEventPublisherImplement_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrationEventPublisherImplement = void 0;
const common_1 = require("@nestjs/common");
const amqplib_1 = require("amqplib");
const app_service_1 = require("../../../app.service");
let IntegrationEventPublisherImplement = IntegrationEventPublisherImplement_1 = class IntegrationEventPublisherImplement {
    constructor() {
        const config = app_service_1.AppService.rabbitMQConfig();
        IntegrationEventPublisherImplement_1.exchange = config.exchange;
        this.promisedChannel = IntegrationEventPublisherImplement_1.connect(config);
        console.log("conectado a rabit");
    }
    async publish(message) {
        this.promisedChannel.then((channel) => channel.publish(IntegrationEventPublisherImplement_1.exchange, message.subject, Buffer.from(JSON.stringify(message.data))));
    }
    static async connect(config) {
        return (0, amqplib_1.connect)(config)
            .then(IntegrationEventPublisherImplement_1.createChannel)
            .then(IntegrationEventPublisherImplement_1.assertExchange)
            .catch(() => IntegrationEventPublisherImplement_1.connect(config));
    }
    static async createChannel(connection) {
        return connection.createChannel();
    }
    static async assertExchange(channel) {
        await channel.assertExchange(IntegrationEventPublisherImplement_1.exchange, 'topic', {
            durable: true,
        });
        return channel;
    }
};
IntegrationEventPublisherImplement = IntegrationEventPublisherImplement_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], IntegrationEventPublisherImplement);
exports.IntegrationEventPublisherImplement = IntegrationEventPublisherImplement;
//# sourceMappingURL=integration-event.publisher.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_service_1 = require("./app.service");
const app_module_1 = require("./app.module");
function setupSwagger(app) {
    const documentBuilder = new swagger_1.DocumentBuilder()
        .setTitle('Yape Application')
        .setDescription('api transaction  with nest.js')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, documentBuilder);
    swagger_1.SwaggerModule.setup('api', app, document);
}
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    setupSwagger(app);
    await app.listen(app_service_1.AppService.port());
}
bootstrap();
//# sourceMappingURL=main.js.map
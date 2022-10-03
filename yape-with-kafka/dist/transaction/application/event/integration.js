"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrationEventSubject = exports.IntegrationEvent = exports.Event = void 0;
class Event {
}
exports.Event = Event;
class IntegrationEvent {
}
exports.IntegrationEvent = IntegrationEvent;
var IntegrationEventSubject;
(function (IntegrationEventSubject) {
    IntegrationEventSubject["CREATED"] = "transaction.created";
    IntegrationEventSubject["UPDATED"] = "transaction.updated";
})(IntegrationEventSubject = exports.IntegrationEventSubject || (exports.IntegrationEventSubject = {}));
//# sourceMappingURL=integration.js.map
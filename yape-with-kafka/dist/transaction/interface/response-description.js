"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseDescription = void 0;
var ResponseDescription;
(function (ResponseDescription) {
    ResponseDescription["OK"] = "The request was successful";
    ResponseDescription["CREATED"] = "The resource was created or the operation not guaranteed to be idempotent succeeded";
    ResponseDescription["BAD_REQUEST"] = "The request is not valid";
    ResponseDescription["NOT_FOUND"] = "No accounts found matching the given id";
    ResponseDescription["UNAUTHORIZED"] = "Authentication failed (this server authenticates with password, not token or session)";
    ResponseDescription["UNPROCESSABLE_ENTITY"] = "The server understood the request and the syntax is correct, but could not fulfill the request";
    ResponseDescription["INTERNAL_SERVER_ERROR"] = "An unexpected error occurred inside the server";
})(ResponseDescription = exports.ResponseDescription || (exports.ResponseDescription = {}));
//# sourceMappingURL=response-description.js.map
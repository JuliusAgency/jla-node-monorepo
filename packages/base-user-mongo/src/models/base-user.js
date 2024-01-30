"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseUser = void 0;
const mongoose_1 = require("mongoose");
const baseOptions = {
    discriminatorKey: '__type',
    collection: 'users',
};
const BaseUserSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        required: true,
    },
}, baseOptions);
exports.BaseUser = (0, mongoose_1.model)('BaseUser', BaseUserSchema);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
(0, globals_1.describe)('', () => {
    it('should say Hello World!', () => {
        const expected = 'Hello World!';
        const result = expected;
        (0, globals_1.expect)(result).toBe(expected);
    });
});
(0, globals_1.describe)('', () => {
    it('should say Goodby!', () => {
        const expected = 'Goodby!';
        const result = expected;
        (0, globals_1.expect)(result).toBe(expected);
    });
});

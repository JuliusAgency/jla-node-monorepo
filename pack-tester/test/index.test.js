"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
(0, globals_1.describe)('Test Suite', () => {
    (0, globals_1.beforeAll)(() => {
        console.log('beforeAll called');
    });
    (0, globals_1.test)('test greet', () => {
        const expected = 'Hello World!';
        const result = expected;
        (0, globals_1.expect)(result).toBe(expected);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluZGV4LnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBa0U7QUFFbEUsSUFBQSxrQkFBUSxFQUFDLFlBQVksRUFBRSxHQUFHLEVBQUU7SUFDMUIsSUFBQSxtQkFBUyxFQUFDLEdBQUcsRUFBRTtRQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUNsQyxDQUFDLENBQUMsQ0FBQztJQUVILElBQUEsY0FBSSxFQUFDLFlBQVksRUFBRSxHQUFHLEVBQUU7UUFDdEIsTUFBTSxRQUFRLEdBQUcsY0FBYyxDQUFDO1FBQ2hDLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQztRQUN4QixJQUFBLGdCQUFNLEVBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2hDLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMifQ==
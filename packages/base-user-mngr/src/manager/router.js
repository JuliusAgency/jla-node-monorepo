"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupAuthRouter = void 0;
const express_1 = require("express");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const setupAuthRouter = (controller) => {
    const router = (0, express_1.Router)();
    router.get('/', (_req, res) => {
        res.send('hello world');
    });
    router.post('/login', controller.login);
    router.get('/logout', controller.logout);
    router.post('/register', controller.register);
    router.post('/change-password', controller.changePassword);
    router.post('/reset-password-request', controller.resetPasswordRequest);
    router.post('/reset-password', controller.resetPassword);
    return router;
};
exports.setupAuthRouter = setupAuthRouter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm91dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUFvRDtBQUVwRCw4REFBOEQ7QUFDdkQsTUFBTSxlQUFlLEdBQUcsQ0FBQyxVQUFlLEVBQUUsRUFBRTtJQUNqRCxNQUFNLE1BQU0sR0FBRyxJQUFBLGdCQUFNLEdBQUUsQ0FBQztJQUV4QixNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQWEsRUFBRSxHQUFhLEVBQUUsRUFBRTtRQUMvQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzFCLENBQUMsQ0FBQyxDQUFDO0lBRUgsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLE1BQU0sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDOUMsTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUM7SUFFM0QsTUFBTSxDQUFDLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxVQUFVLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUN4RSxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUV6RCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDLENBQUM7QUFoQlcsUUFBQSxlQUFlLG1CQWdCMUIifQ==
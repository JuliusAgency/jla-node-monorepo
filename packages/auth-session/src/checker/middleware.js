"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupAuthMiddleware = void 0;
const express_1 = require("../configuration/express");
const setupAuthMiddleware = (config) => {
    (0, express_1.setupExpress)(config);
    return (req, res, next) => {
        /**
         * If the user is already authenticated and the browser already has a session id
         * then upon request the deSerializeUser function will be called first,
         * it will retrieve the user from the session and add it to
         * req.user and pass to isAuthenticated function.
         * If the user is already authenticated in isAuthenticated function (req.user exist)
         * then go to next function which will be /api/user route.
         * Otherwise, redirect to homepage.         *
         */
        if (req.isAuthenticated()) {
            return next();
        }
        res.sendStatus(401);
    };
};
exports.setupAuthMiddleware = setupAuthMiddleware;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1pZGRsZXdhcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0Esc0RBQXdEO0FBR2pELE1BQU0sbUJBQW1CLEdBQUcsQ0FBQyxNQUFrQixFQUFFLEVBQUU7SUFFeEQsSUFBQSxzQkFBWSxFQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRXJCLE9BQU8sQ0FBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWtCLEVBQW1CLEVBQUU7UUFDMUU7Ozs7Ozs7O1dBUUc7UUFDSCxJQUFJLEdBQUcsQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDO1lBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztRQUFDLENBQUM7UUFDN0MsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN0QixDQUFDLENBQUM7QUFDSixDQUFDLENBQUM7QUFqQlcsUUFBQSxtQkFBbUIsdUJBaUI5QiJ9
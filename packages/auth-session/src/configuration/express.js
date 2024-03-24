"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupExpress = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const express_session_1 = __importDefault(require("express-session"));
const passport_1 = __importDefault(require("passport"));
const session_1 = require("./session");
const passport_2 = require("./passport");
const setupExpress = (authConfig) => {
    // setup session
    const sessionOptions = (0, session_1.initSession)(authConfig.sessionConfig);
    authConfig.app.use((0, express_session_1.default)(Object.assign(Object.assign({}, sessionOptions), authConfig.storage)));
    (0, passport_2.setupPassport)(authConfig.User);
    // LocalStrategy.init(passport, authConfig.User);
    // setup passport on every route call
    authConfig.app.use(passport_1.default.initialize());
    // passport.session has to be used after 
    // express.session in order to work properly.
    // allow passport to use "express-session"
    authConfig.app.use(passport_1.default.session());
    // passport function that calls the strategy to be executed
    authConfig.app.use(passport_1.default.authenticate('session'));
};
exports.setupExpress = setupExpress;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwcmVzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImV4cHJlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsdURBQXVEO0FBQ3ZELHNFQUFzQztBQUN0Qyx3REFBZ0M7QUFFaEMsdUNBQXdDO0FBQ3hDLHlDQUEyQztBQUdwQyxNQUFNLFlBQVksR0FBRyxDQUFDLFVBQXNCLEVBQUUsRUFBRTtJQUNyRCxnQkFBZ0I7SUFDaEIsTUFBTSxjQUFjLEdBQUcsSUFBQSxxQkFBVyxFQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM3RCxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFBLHlCQUFPLGtDQUFNLGNBQWMsR0FBSyxVQUFVLENBQUMsT0FBTyxFQUFHLENBQUMsQ0FBQztJQUUxRSxJQUFBLHdCQUFhLEVBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRS9CLGlEQUFpRDtJQUVqRCxxQ0FBcUM7SUFDckMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsa0JBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQzFDLHlDQUF5QztJQUN6Qyw2Q0FBNkM7SUFDN0MsMENBQTBDO0lBQzFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLGtCQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUN2QywyREFBMkQ7SUFDM0QsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsa0JBQVEsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztBQUN2RCxDQUFDLENBQUM7QUFqQlcsUUFBQSxZQUFZLGdCQWlCdkIifQ==
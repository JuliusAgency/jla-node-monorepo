"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transportHttp = void 0;
const winston_1 = require("winston");
const transportHttp = (cfg) => {
    return new winston_1.transports.Http({
        host: cfg.host,
        port: cfg.port,
        path: cfg.path,
        format: winston_1.format.combine(winston_1.format.timestamp(), winston_1.format.printf(({ timestamp, level, message, service }) => {
            return `[${timestamp}] ${service} ${level}: ${message}`;
        }))
    });
};
exports.transportHttp = transportHttp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImh0dHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQXNEO0FBUS9DLE1BQU0sYUFBYSxHQUFHLENBQUMsR0FBc0IsRUFBcUIsRUFBRTtJQUN6RSxPQUFPLElBQUksb0JBQVUsQ0FBQyxJQUFJLENBQUM7UUFDekIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJO1FBQ2QsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJO1FBQ2QsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJO1FBQ2QsTUFBTSxFQUFFLGdCQUFNLENBQUMsT0FBTyxDQUNwQixnQkFBTSxDQUFDLFNBQVMsRUFBRSxFQUNsQixnQkFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUN2RCxPQUFPLElBQUksU0FBUyxLQUFLLE9BQU8sSUFBSSxLQUFLLEtBQUssT0FBTyxFQUFFLENBQUM7UUFDMUQsQ0FBQyxDQUFDLENBQ0g7S0FDRixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFaVyxRQUFBLGFBQWEsaUJBWXhCIn0=
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transportConsole = void 0;
const winston_1 = require("winston");
const transportConsole = () => {
    return new winston_1.transports.Console({
        format: winston_1.format.combine(winston_1.format.colorize(), winston_1.format.printf(({ timestamp, level, message }) => {
            return `[${timestamp}] ${level}: ${message}`;
        })),
    });
};
exports.transportConsole = transportConsole;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc29sZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbnNvbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQXNEO0FBRS9DLE1BQU0sZ0JBQWdCLEdBQUcsR0FBc0IsRUFBRTtJQUN0RCxPQUFPLElBQUksb0JBQVUsQ0FBQyxPQUFPLENBQUM7UUFDNUIsTUFBTSxFQUFFLGdCQUFNLENBQUMsT0FBTyxDQUNwQixnQkFBTSxDQUFDLFFBQVEsRUFBRSxFQUNqQixnQkFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQzlDLE9BQU8sSUFBSSxTQUFTLEtBQUssS0FBSyxLQUFLLE9BQU8sRUFBRSxDQUFDO1FBQy9DLENBQUMsQ0FBQyxDQUNIO0tBQ0YsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBVFcsUUFBQSxnQkFBZ0Isb0JBUzNCIn0=
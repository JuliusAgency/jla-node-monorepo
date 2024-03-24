"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transportFactory = void 0;
require("winston-daily-rotate-file");
const transports_1 = require("./transports");
const daily_rotated_1 = require("./transports/daily-rotated");
const transportFactory = (cfg) => {
    if (cfg.loggerOptionsStream) {
        return (0, transports_1.transportStream)(cfg.loggerOptionsStream);
    }
    else if (cfg.loggerOptionsHttp) {
        return (0, transports_1.transportHttp)(cfg.loggerOptionsHttp);
    }
    else if (cfg.loggerOptionsRotated) {
        return (0, daily_rotated_1.transportDailyRotated)(cfg.loggerOptionsRotated);
    }
    return (0, transports_1.transportConsole)();
};
exports.transportFactory = transportFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQW1DO0FBS25DLDZDQUFnRjtBQUNoRiw4REFBbUU7QUFFNUQsTUFBTSxnQkFBZ0IsR0FBRyxDQUFDLEdBQWtCLEVBQXFCLEVBQUU7SUFFeEUsSUFBSSxHQUFHLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUM1QixPQUFPLElBQUEsNEJBQWUsRUFBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUNsRCxDQUFDO1NBQU0sSUFBSSxHQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUNqQyxPQUFPLElBQUEsMEJBQWEsRUFBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUM5QyxDQUFDO1NBQU0sSUFBSSxHQUFHLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUNwQyxPQUFPLElBQUEscUNBQXFCLEVBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDekQsQ0FBQztJQUNELE9BQU8sSUFBQSw2QkFBZ0IsR0FBRSxDQUFDO0FBQzVCLENBQUMsQ0FBQztBQVZXLFFBQUEsZ0JBQWdCLG9CQVUzQiJ9
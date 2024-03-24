"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transportDailyRotated = void 0;
const winston_1 = require("winston");
const transportDailyRotated = (cfg) => {
    return new (winston_1.transports.DailyRotateFile)({
        filename: cfg.fullFilename,
        datePattern: cfg.datePattern,
        zippedArchive: toBoolean(cfg.zippedArchive),
        maxSize: cfg.fileMaxSize,
        maxFiles: cfg.maxFiles,
        format: winston_1.format.combine(winston_1.format.json()),
    });
};
exports.transportDailyRotated = transportDailyRotated;
const toBoolean = (dataStr) => {
    var _a;
    return !!(((_a = dataStr === null || dataStr === void 0 ? void 0 : dataStr.toLowerCase) === null || _a === void 0 ? void 0 : _a.call(dataStr)) === 'true');
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFpbHktcm90YXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhaWx5LXJvdGF0ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQXNEO0FBVS9DLE1BQU0scUJBQXFCLEdBQUcsQ0FBQyxHQUF5QixFQUFxQixFQUFFO0lBQ3BGLE9BQU8sSUFBRyxDQUFDLG9CQUFVLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDckMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxZQUFZO1FBQzFCLFdBQVcsRUFBRSxHQUFHLENBQUMsV0FBVztRQUM1QixhQUFhLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUM7UUFDM0MsT0FBTyxFQUFFLEdBQUcsQ0FBQyxXQUFXO1FBQ3hCLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUTtRQUN0QixNQUFNLEVBQUUsZ0JBQU0sQ0FBQyxPQUFPLENBQUMsZ0JBQU0sQ0FBQyxJQUFJLEVBQUUsQ0FDbkM7S0FDRixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFWVyxRQUFBLHFCQUFxQix5QkFVaEM7QUFFRixNQUFNLFNBQVMsR0FBRyxDQUFDLE9BQWUsRUFBVyxFQUFFOztJQUM3QyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUEsTUFBQSxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsV0FBVyx1REFBSSxNQUFLLE1BQU0sQ0FBQyxDQUFDO0FBQ2pELENBQUMsQ0FBQyJ9
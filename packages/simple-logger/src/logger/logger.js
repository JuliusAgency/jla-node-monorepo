"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initLogger = exports.level = void 0;
const winston_1 = require("winston");
require("winston-daily-rotate-file");
const factory_1 = require("./factory");
const { timestamp, combine, errors, json } = winston_1.format;
var level;
(function (level) {
    level["error"] = "error";
    level["warn"] = "warn";
    level["info"] = "info";
    level["http"] = "http";
    level["verbose"] = "verbose";
    level["debug"] = "debug";
    level["silly"] = "silly";
})(level || (exports.level = level = {}));
;
const initLogger = (cfg) => {
    const logger = (0, winston_1.createLogger)({
        format: combine(timestamp(), errors({ stack: true }), json()),
        level: cfg.loggerLevel,
        defaultMeta: {
            service: cfg.loggerService || "SimpleLogger",
        },
    });
    logger.add((0, factory_1.transportFactory)(cfg));
    return logger;
};
exports.initLogger = initLogger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9nZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUFzRDtBQUN0RCxxQ0FBbUM7QUFFbkMsdUNBQTZDO0FBRzdDLE1BQU0sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxnQkFBTSxDQUFDO0FBRXBELElBQVksS0FRWDtBQVJELFdBQVksS0FBSztJQUNmLHdCQUFlLENBQUE7SUFDZixzQkFBYSxDQUFBO0lBQ2Isc0JBQWEsQ0FBQTtJQUNiLHNCQUFhLENBQUE7SUFDYiw0QkFBbUIsQ0FBQTtJQUNuQix3QkFBZSxDQUFBO0lBQ2Ysd0JBQWUsQ0FBQTtBQUNqQixDQUFDLEVBUlcsS0FBSyxxQkFBTCxLQUFLLFFBUWhCO0FBQUEsQ0FBQztBQVVLLE1BQU0sVUFBVSxHQUFHLENBQUMsR0FBa0IsRUFBVSxFQUFFO0lBQ3ZELE1BQU0sTUFBTSxHQUFHLElBQUEsc0JBQVksRUFBQztRQUMxQixNQUFNLEVBQUUsT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDO1FBQzdELEtBQUssRUFBRSxHQUFHLENBQUMsV0FBVztRQUN0QixXQUFXLEVBQUU7WUFDWCxPQUFPLEVBQUUsR0FBRyxDQUFDLGFBQWEsSUFBSSxjQUFjO1NBQzdDO0tBQ0YsQ0FBQyxDQUFDO0lBQ0gsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFBLDBCQUFnQixFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFFbEMsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyxDQUFDO0FBWFcsUUFBQSxVQUFVLGNBV3JCIn0=
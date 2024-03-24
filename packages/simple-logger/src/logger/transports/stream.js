"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transportStream = void 0;
const winston_1 = require("winston");
const transportStream = (cfg) => {
    return new winston_1.transports.Stream({
        stream: cfg.stream,
        format: winston_1.format.combine(winston_1.format.timestamp(), winston_1.format.printf(({ timestamp, level, message, service }) => {
            return `[${timestamp}] ${service} ${level}: ${message}`;
        })),
    });
};
exports.transportStream = transportStream;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyZWFtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3RyZWFtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHFDQUFzRDtBQU0vQyxNQUFNLGVBQWUsR0FBRyxDQUFDLEdBQXdCLEVBQXFCLEVBQUU7SUFDN0UsT0FBTyxJQUFJLG9CQUFVLENBQUMsTUFBTSxDQUFDO1FBQzNCLE1BQU0sRUFBRSxHQUFHLENBQUMsTUFBTTtRQUNsQixNQUFNLEVBQUUsZ0JBQU0sQ0FBQyxPQUFPLENBQ3BCLGdCQUFNLENBQUMsU0FBUyxFQUFFLEVBQ2xCLGdCQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQ3ZELE9BQU8sSUFBSSxTQUFTLEtBQUssT0FBTyxJQUFJLEtBQUssS0FBSyxPQUFPLEVBQUUsQ0FBQztRQUMxRCxDQUFDLENBQUMsQ0FDSDtLQUNGLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQVZXLFFBQUEsZUFBZSxtQkFVMUIifQ==
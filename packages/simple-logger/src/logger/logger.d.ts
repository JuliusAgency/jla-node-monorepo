import { Logger } from "winston";
import "winston-daily-rotate-file";
import { loggerOptionsHttp, loggerOptionsRotated, loggerOptionsStream } from "./transports";
export declare enum level {
    error = "error",
    warn = "warn",
    info = "info",
    http = "http",
    verbose = "verbose",
    debug = "debug",
    silly = "silly"
}
export type LoggerOptions = {
    loggerService?: string;
    loggerLevel: string;
    loggerOptionsStream?: loggerOptionsStream;
    loggerOptionsRotated?: loggerOptionsRotated;
    loggerOptionsHttp?: loggerOptionsHttp;
};
export declare const initLogger: (cfg: LoggerOptions) => Logger;

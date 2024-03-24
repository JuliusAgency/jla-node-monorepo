import winston from "winston";
export type loggerOptionsRotated = {
    fullFilename: string;
    fileMaxSize: string;
    datePattern: string;
    maxFiles: string;
    zippedArchive: string;
};
export declare const transportDailyRotated: (cfg: loggerOptionsRotated) => winston.transport;

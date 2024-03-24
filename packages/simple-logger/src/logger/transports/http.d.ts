import winston from "winston";
export type loggerOptionsHttp = {
    host?: string;
    port?: number;
    path?: string;
};
export declare const transportHttp: (cfg: loggerOptionsHttp) => winston.transport;

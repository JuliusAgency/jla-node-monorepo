/// <reference types="node" />
import { Logger } from "winston";
export type LoggerFormatter = {
    token: string;
};
export declare const initHttpLogger: (logger: Logger, formatter: LoggerFormatter) => (req: import("http").IncomingMessage, res: import("http").ServerResponse<import("http").IncomingMessage>, callback: (err?: Error) => void) => void;

import "winston-daily-rotate-file";
import winston from "winston";
import { LoggerOptions } from "./logger";
export declare const transportFactory: (cfg: LoggerOptions) => winston.transport;

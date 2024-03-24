/// <reference types="node" />
import * as nodeStream from 'node:stream';
import winston from "winston";
export type loggerOptionsStream = {
    stream: nodeStream.Writable;
};
export declare const transportStream: (cfg: loggerOptionsStream) => winston.transport;

import 'express-async-errors';
import { NextFunction, Request, Response } from 'express';
export declare const errorHandler: (error: Error, _request: Request, response: Response, _next: NextFunction) => void;

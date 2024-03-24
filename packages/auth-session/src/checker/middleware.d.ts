import { Request, Response, NextFunction } from 'express';
import { AuthConfig } from '../configuration/types';
export declare const setupAuthMiddleware: (config: AuthConfig) => (req: Request, res: Response, next: NextFunction) => Response | void;

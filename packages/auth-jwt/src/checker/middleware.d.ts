/**
 * Auth Express middleware, checks for a valid JSON Web Token
 * and returns 401 Unauthorized if one isn't found.
 * Based on
 * https://nozzlegear.com/blog/implementing-a-jwt-auth-system-with-typescript-and-node
 */
import { Request, Response, NextFunction } from 'express';
import { AuthJwtOptions, EncodeResult, PartialSession } from './types';
export declare const setupAuthMiddleware: (options: AuthJwtOptions) => {
    authMiddleware: (req: Request, res: Response, next: NextFunction) => void;
    encodeToken: (partialSession: PartialSession) => EncodeResult;
};
//# sourceMappingURL=middleware.d.ts.map
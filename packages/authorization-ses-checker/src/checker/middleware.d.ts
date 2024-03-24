import { Response, NextFunction } from 'express';
export declare const setupAuthorization: ({ rulesRepo }: {
    rulesRepo: any;
}) => (permission: string, resource?: string) => (req: any, res: Response, next: NextFunction) => Promise<void>;

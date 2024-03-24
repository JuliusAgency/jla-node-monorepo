import { Request, Response, NextFunction } from 'express';
import { AuthMngrOPtions } from './types';
export declare const setupAuthController: (options: AuthMngrOPtions, service: any) => {
    login: (req: Request, res: Response, next: NextFunction) => void;
    logout: (req: any, res: Response) => void;
    register: (req: Request, res: Response, next: NextFunction) => void;
    changePassword: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    resetPasswordRequest: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    resetPassword: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
};

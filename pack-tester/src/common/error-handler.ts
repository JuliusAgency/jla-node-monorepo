import { NextFunction, Request, Response } from 'express';

import { errorHandler, AppError, AppErrorArgs, ResponseCode } from '../../../packages/simple-error-handler/src';

export { AppError, AppErrorArgs, ResponseCode };

export const setupErrorHandler = () => {
  return (err: Error, req: Request, res: Response, next: NextFunction) => {
    errorHandler(err, req, res, next);
  };
};

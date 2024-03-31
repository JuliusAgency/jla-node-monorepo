import { NextFunction, Request, Response } from 'express';

import { errorHandler } from '../../../packages/simple-error-handler/src';

export const setupErrorHandler = () => {
  return (err: Error, req: Request, res: Response, next: NextFunction) => {
    errorHandler(err, req, res, next);
  };
};

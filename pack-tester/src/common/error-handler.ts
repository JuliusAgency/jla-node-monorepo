import { NextFunction, Request, Response } from 'express';

import { errorHandler } from '@juliusagency/simple-error-handler';

export const setupErrorHandler = () => {
  return (err: Error, req: Request, res: Response, next: NextFunction) => {
    errorHandler(err, req, res, next);
  };
};

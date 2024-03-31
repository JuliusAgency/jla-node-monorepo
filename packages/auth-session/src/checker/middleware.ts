import { Request, Response, NextFunction } from 'express';
import { setupExpress } from '../configuration/express';
import { AuthConfig } from '../configuration/types';

export const setupAuthMiddleware = (config: AuthConfig) => {

  setupExpress(config);

  return (req: Request, res: Response, next: NextFunction): Response | void => {
    /**
     * If the user is already authenticated and the browser already has a session id 
     * then upon request the deSerializeUser function will be called first, 
     * it will retrieve the user from the session and add it to 
     * req.user and pass to isAuthenticated function.
     * If the user is already authenticated in isAuthenticated function (req.user exist) 
     * then go to next function which will be /api/user route.
     * Otherwise, redirect to homepage.         * 
     */
    if (req.isAuthenticated()) { return next(); }
    res.sendStatus(401);
  };
};
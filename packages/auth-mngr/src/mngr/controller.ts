import { Request, Response, NextFunction } from 'express';
import { AuthMngrOptions } from ".";

export const setupAuthController = (options: AuthMngrOptions) => {
  const login = (req: Request, res: Response, next: NextFunction) => {
    options.passport.authenticate(
      'local-login',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (error: Error, user: any, info: any): any => {
        if (error) return res.status(403).json(error);
        if (!user) return res.status(404).send(info);
        req.logIn(user, { session: options.session }, async (error) => {
          if (error) return next(error);
          user.password = '[encoded password]';
          const { email } = req.body;
          let retData = {
            email: email,
            role: undefined,
            user: undefined,
          };
          // for future authorization usage
          if (user.role) {
            retData.role = user.role;
          }
          if (!options.session) {
            retData = options.encode(retData);
            // for front usage
            retData.user = user;
            return res.send(retData);
          }
          return res.send(user);
        });
      },
    )(req, res, next);
  };
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const logout = (req: any, res: Response) => {
    req.session.destroy((error: Error) => {
      if (error) {
        return res.status(500).send({ message: error, success: false });
      }
      return res.status(200).send({ message: 'logged Out', success: true });
    });
  };

  return { 
    login,
    logout,
  };
};
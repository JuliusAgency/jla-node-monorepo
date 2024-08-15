import { Request, Response, NextFunction } from 'express';
import { AuthMngrControllerOptions } from ".";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setupAuthStrategyController = (options: AuthMngrControllerOptions, service: any) => {
  const session = options.common.session;
  const encode = options.common.encode;
  const logger = options.common.logger;
  const strategy = options.strategyDef.strategy;

  logger?.debug(`setupAuthStrategyController for: ${strategy.name}`);
  // for social strategies _usernameField is undefined
  logger?.debug(`setupAuthStrategyController unique prop name: ${strategy._usernameField}`);

  const register = async (req: Request, res: Response) => {
    const newUser = req.body;
    try {
      const user = await options.service.register(strategy._usernameField, newUser);
      return res.send(user);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: Error | any) {
      return res.status(500).json({ message: error.message });
    }
  };

  const login = (req: Request, res: Response, next: NextFunction) => {
    options.strategyDef.passport.authenticate(
      strategy.name,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (error: Error, user: any, info: any): any => {
        if (error) return res.status(403).json(error);
        if (!user) return res.status(404).send(info);
        const role = user.role;
        if (!role) {
          // User doesn't exist, but may be registred after social verifycation
          return res.send(user);         
        }
        req.logIn(user, { session: session }, async (error) => {
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
          if (!session) {
            retData = encode(retData);
            // for front usage
            retData.user = user;
            return res.send(retData);
          }
          return res.send(user);
        });
      },
    )(req, res, next);
  };

  const changePassword = async (req: Request, res: Response) => {
    // const { email, password, passwordNew } = req.body;
    logger?.debug(`change password in ${__filename}`);
    const data = req.body;
    try {
      await service.changePassword(strategy._usernameField, data);
      return res.status(200).send({ success: true });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: Error | any) {
      return res.status(500).json({ message: error.message });
    }
  };
  
  return {
    register,
    login,
    changePassword,
  };
};

export const setupAuthCommonController = () => {
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
    logout,
  };
};
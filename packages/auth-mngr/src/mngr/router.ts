/* eslint-disable @typescript-eslint/no-explicit-any */
import { AuthMngrRouterOptions } from ".";

export const setupAuthStrategyRouter = (options: AuthMngrRouterOptions) => {
  const router = options.common.router;
  const strategy = options.strategyDef.strategy;
  const logger = options.common.logger;
  const controller = options.controller;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const trace = (req: Request, _res: Response, next: any) => {
  //   logger.debug(`request - ${strategy.name}- url -${req.url}`);
  //   next();
  // };

  const validationDefault = (req: Request, _res: Response, next: any) => {
    logger?.debug(`request strategy - ${strategy.name}- url -${req.url}`);
    next();
  };
  const validation = options.validation ? options.validation : validationDefault;

  logger?.debug(`setupAuthStrategyRouter for ${strategy.name}`);
  if (strategy.name === 'local') {
    router.post('/register', validation, controller.register);
    router.post('/login', validation, controller.login); 
  } else {
    router.get(`/${strategy.name}`, validation, controller.login); 
    router.get(`/${strategy.name}/callback`, validation, controller.login); 
  }
};

export const setupAuthCommonRouter = (options: AuthMngrRouterOptions) => {
  const router = options.common.router;
  const controller = options.controller;

  router.get('/logout', controller.logout);
};

// Example
// const validation = (req: any, _res: any, next: any) => {
//   const { email } = req.body;
//   logger.debug(`request body -${email}`);
//   if (email === 'user1@gmail.com') {
//     next();
//   } else {
//     throw new Error('bad credentials');
//   }
// };

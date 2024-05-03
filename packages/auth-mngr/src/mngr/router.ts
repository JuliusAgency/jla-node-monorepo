/* eslint-disable @typescript-eslint/no-explicit-any */
import { AuthMngrRouterOptions } from ".";

// export type RouteEntry = {
//   method: string;
//   route: string;
//   action: (data: Record<string, any>, req?: Request, res?: Response) => any;
//   // validation: Array<Middleware & ContextRunner>;
// };

export const setupAuthStrategyRouter = (options: AuthMngrRouterOptions) => {
  const router = options.common.router;
  const strategy = options.strategyDef.strategy;
  const logger = options.common.logger;
  const controller = options.controller;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const trace = (req: Request, _res: Response, next: any) => {
    logger.debug(`request - ${strategy.name}- url -${req.url}`);
    next();
  };

  logger.debug(`setupAuthStrategyRouter for ${strategy.name}`);
  if (strategy.name === 'local') {
    router.post('/register', controller.register);
    router.post('/login', trace, controller.login); 
  } else {
    router.get(`/${strategy.name}`, trace, controller.login); 
    router.get(`/${strategy.name}/callback`, controller.login); 
  }
};

export const setupAuthCommonRouter = (options: AuthMngrRouterOptions) => {
  const router = options.common.router;
  const controller = options.controller;

  router.get('/logout', controller.logout);
};

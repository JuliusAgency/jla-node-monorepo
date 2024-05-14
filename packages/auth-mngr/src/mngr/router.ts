/* eslint-disable @typescript-eslint/no-explicit-any */
import { AuthMngrRouterOptions } from ".";

export const setupAuthStrategyRouter = (options: AuthMngrRouterOptions) => {
  const router = options.common.router;
  const strategy = options.strategyDef.strategy;
  const logger = options.common.logger;
  const controller = options.controller;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const validationDefault = (req: Request, _res: Response, _next: any) => {
    logger?.debug(`request strategy - ${strategy.name}- url -${req.url} - ${__filename}`);
  };
  const validation = options.validation ? options.validation : validationDefault;

  logger?.debug(`setupAuthStrategyRouter for ${strategy.name} - ${__filename}`);
  if (strategy.name.startsWith('local')) {
    router.route('/register')
      .post(async (req: Request, res: Response, next: any) => {
        await validation(req, res, next);
        await controller.register(req, res, next);
      });
    router.route('/login')
      .post(async (req: Request, res: Response, next: any) => {
        await validation(req, res, next);
        await controller.login(req, res, next);
      });
  } else {
    router.route(`/${strategy.name}`)
      .get(async (req: Request, res: Response, next: any) => {
        await validation(req, res, next);
        await controller.login(req, res, next);
      });
    router.route(`/${strategy.name}/callback`)
      .get(async (req: Request, res: Response, next: any) => {
        await validation(req, res, next);
        await controller.login(req, res, next);
      });
  }
};

export const setupAuthCommonRouter = (options: AuthMngrRouterOptions) => {
  const router = options.common.router;
  const controller = options.controller;

  router.route('/logout')
    .get((req: Request, res: Response, next: any) => {
      controller.logout(req, res, next);
    });

};

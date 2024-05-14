/* eslint-disable @typescript-eslint/no-explicit-any */
import { authentication, authorization, AuthOptions } from '../../../extensions';
import { StrategyOptions } from '../../../extensions/ses-mongo/authentication';

export type ExtensionOptions = {
  config: any;
  db: any;
  logger: any;
  app: any;
  router: any;
  Router: any;
  passport: any;
  strategies: [any];
  appDomain: any;
};

export const setupExtension = async (options: ExtensionOptions) => {
  const { config, db, logger, app, router, Router, passport, strategies, appDomain } = options;
  const User = appDomain.User;

  const authOptions: AuthOptions = {
    app: app,
    passport: passport,
    config: config,
    db: db,
    User: User,
    logger: logger,
  };

  const { authMngr, sessionMiddleware, passwordMngr } = authentication(authOptions);

  const authStrategyOptionsT: StrategyOptions = {
    router: Router(), 
    strategies: strategies,
    strategyPath: 'test',
    socialstrategyName: 'github',
    socialIdFieldName: 'github_id',
  };
  const authRouterT = authMngr(authStrategyOptionsT);

  const authStrategyOptions: StrategyOptions = {
    router: Router(),
    strategies: strategies,
    strategyPath: 'auth',
    socialstrategyName: 'github',
    socialIdFieldName: 'github_id',
  };
  const authRouter = authMngr(authStrategyOptions);
  
  const userMngrRouter = passwordMngr();

  // Auth middleware usage
  const authMiddleware = sessionMiddleware();

  app.use(appDomain.protectedRoutes, authMiddleware);

  const authorizationOptions = {
    config: config,
    db: db,
  };
  const isAuthorized = await authorization(authorizationOptions);

  // Auth router usage
  router.use('/auth', authRouter);
  router.use('/test', authRouterT);
  router.use('/user-mngr', userMngrRouter);

  // Setup the app domain
  appDomain.setupAppDomain({
    router,
    isAuthorized,
    repository: db,
  });
};

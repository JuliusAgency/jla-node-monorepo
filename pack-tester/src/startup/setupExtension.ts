/* eslint-disable @typescript-eslint/no-explicit-any */
import { authentication, authorization, AuthOptions, StrategiesPathOptions } from '../../../extensions';

export type ExtensionOptions = {
  config: any;
  db: any;
  logger: any;
  emailer?: any;
  app: any;
  router: any;
  Router: any;
  passport: any;
  strategies: { string: any };
  appDomain: any;
};

export const setupExtension = async (options: ExtensionOptions) => {
  const { config, db, logger, emailer, app, router, Router, passport, strategies, appDomain } = options;
  const User = appDomain.User;

  const authOptions: AuthOptions = {
    app: app,
    passport: passport,
    config: config,
    db: db,
    user: User,
    logger: logger,
    emailer: emailer,
  };

  const { authMngr, passwordMngr, authMiddleware } = authentication(authOptions);

  // Init strategies for each authentication path
  const authRouters = [];
  config.strategyNameSets.pathes.forEach((p: string) => {
    const strategyNamesForPath = config.strategyNameSets[p].names;
    // Init strategies for the path
    const strategiesForPath = {};
    strategyNamesForPath.forEach((name: any) => {
      strategiesForPath[name] = strategies[name];
    });
    const authStrategyOptions: StrategiesPathOptions = {
      router: Router(),
      strategies: strategiesForPath,
      strategyPath: p,
      strategiesConfig: config.strategyNameSets[p],
    };
    logger.debug(`Start setup Auth manager for the path - (${p}) with the strategies [${strategyNamesForPath}]`);
    const authRouter = authMngr(authStrategyOptions);
    authRouters.push({ [p]: authRouter });
  });

  // Auth router usage
  authRouters.forEach((ar) => {
    Object.entries(ar).forEach(([p, r]) => {
      router.use(`/${p}`, r);
    });
  });

  const passwordRouter = passwordMngr();
  router.use('/passw', passwordRouter);

  // Auth middleware usage
  app.use(appDomain.protectedRoutes, authMiddleware);

  const authorizationOptions = {
    config: config,
    db: db,
  };
  const isAuthorized = await authorization(authorizationOptions);

  // Setup the app domain
  appDomain.setupAppDomain({
    router,
    isAuthorized,
    repository: db,
  });
};

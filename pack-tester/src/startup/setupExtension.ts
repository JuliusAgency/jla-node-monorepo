/* eslint-disable @typescript-eslint/no-explicit-any */
import { authentication, authorization, AuthOptions } from '../../../extensions';
import { StrategiesPathOptions } from '../../../extensions/ses-mongo/authentication';

export type ExtensionOptions = {
  config: any;
  db: any;
  logger: any;
  app: any;
  router: any;
  Router: any;
  passport: any;
  strategies: { string: any };
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

  // Init strategies for each strategy path
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
    logger.debug(`authStrategyOptions - ${authStrategyOptions}`);
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
  const authMiddleware = sessionMiddleware();
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

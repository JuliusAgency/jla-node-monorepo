/* eslint-disable @typescript-eslint/no-explicit-any */
import { authentication, authorization, authOptions } from '../../../extensions';

export type ExtensionOptions = {
  config: any;
  db: any;
  logger: any;
  app: any;
  router: any;
  passport: any;
  strategies: [any];
  appDomain: any;
};

export const setupExtension = async (options: ExtensionOptions) => {
  const { config, db, logger, app, router, passport, strategies, appDomain } = options;
  const User = appDomain.User;

  const authOptions: authOptions = {
    app: app,
    router: router,
    passport: passport,
    strategies: strategies,
    config: config,
    db: db,
    User: User,
    logger: logger,
  };
  const { authRouter, userMngrRouter, authMiddleware } = authentication(authOptions);
  app.use(appDomain.protectedRoutes, authMiddleware);

  const authorizationOptions = {
    config: config,
    db: db,
  };
  const isAuthorized = await authorization(authorizationOptions);

  // Auth middleware usage
  // Auth router usage
  router.use('/auth', authRouter);
  router.use('/user-mngr', userMngrRouter);

  // Setup the app domain
  appDomain.setupAppDomain({
    router,
    isAuthorized,
    repository: db,
  });
};

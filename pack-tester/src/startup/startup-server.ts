import express, { Express, Router, Request, Response } from 'express';

import { setupCors, setupHeaders, setupErrorHandler, setupLogger, setupEmailer } from '../common';
// import { AppDomainDependencies } from '../app-domain';

export type ServerDependencies = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  config: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  db: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  authExtension: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  authorizationExtension: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  appDomain: any;
};

export const startupServer = async (dependencies: ServerDependencies) => {
  const { config, db, authExtension, authorizationExtension, appDomain } = dependencies;
  const app: Express = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(setupCors(config));
  app.use(setupHeaders());

  const { logger, httpLogger } = setupLogger(config);
  app.use(httpLogger);

  const emailer = setupEmailer(config);

  const router = Router();
  // Ping
  router.get('/', (_req: Request, res: Response) => {
    res.json({ message: `Is live` });
  });

  const authExtensionDependencies = {
    config: config,
    db: db,
    logger: logger,
    emailer: emailer,
    app: app,
    router: router,
    Router: Router,
    User: appDomain.User,
  };
  const authMiddleware = await authExtension(authExtensionDependencies);

  // Auth middleware usage
  app.use(appDomain.protectedRoutes, authMiddleware);

  const authorizationExtensionDependencies = {
    config: config,
    db: db,
  };
  const isAuthorized = await authorizationExtension(authorizationExtensionDependencies);

  const errorHandler = setupErrorHandler();
  // Setup the app domain

  const appDomainDependencies = {
    logger: logger,
    router: router,
    Router: Router,
    isAuthorized: isAuthorized,
    repository: db,
  };
  appDomain.appDomain(appDomainDependencies);

  app.use(router);

  app.use(errorHandler);

  app.listen(config.port, () => {
    logger.info(`⚡️[server]: Server is running
      at: ${config.baseUrl}:${config.port}
      in: ${config.env} environment`);
  });
};

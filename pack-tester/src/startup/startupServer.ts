import express, { Express, Router, Request, Response } from 'express';

import { setupCors, setupHeaders, setupErrorHandler, setupLogger } from '../common';

import { authentication, authorization } from '../../../extensions/ses-sql';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const startupServer = ({ config, db, User, setupAppDomain }) => {
  const app: Express = express();
  app.use(express.json());

  app.use(setupCors(config));
  app.use(setupHeaders());

  const { logger, httpLogger } = setupLogger(config);
  app.use(httpLogger);

  const { authMiddleware, authRouter } = authentication({ app, config, db, User });

  const isAuthorized = authorization({ config, db });

  // Auth middleware usage
  // Define the protected routes

  const router = Router();
  // Auth router usage
  router.use('/auth', authRouter);
  // Setup the app domain
  const protectedRoutes = setupAppDomain({
    router,
    isAuthorized,
    repository: db.sqlRepository,
  });
  app.use(protectedRoutes, authMiddleware);

  app.use(router);
  router.get('/', (_req: Request, res: Response) => {
    res.json({ message: `Is live` });
  });

  app.use(setupErrorHandler());

  app.listen(config.port, () => {
    logger.info(`⚡️[server]: Server is running
      at: ${config.baseUrl}:${config.port}
      in: ${config.env} environment`);
  });
};

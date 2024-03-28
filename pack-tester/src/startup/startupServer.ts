import express, { Express, Router, Request, Response } from 'express';

import { setupCors, setupHeaders, setupErrorHandler, setupLogger } from '../common';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const startupServer = ({ config, db, User, setupExtension, setupAppDomain }) => {
  // console.log(db);
  // console.log(User);
  // console.log(setupExtension);
  // console.log(setupAppDomain);

  const app: Express = express();
  app.use(express.json());

  app.use(setupCors(config));
  app.use(setupHeaders());

  const { logger, httpLogger } = setupLogger(config);
  app.use(httpLogger);

  const router = Router();
  setupExtension({ config, db, app, router, User, setupAppDomain });

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

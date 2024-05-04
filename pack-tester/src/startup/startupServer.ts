import express, { Express, Router, Request, Response } from 'express';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as GihubStrategy } from 'passport-github2';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

import { setupCors, setupHeaders, setupErrorHandler, setupLogger } from '../common';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const startupServer = ({ config, db, setupExtension, appDomain }) => {
  const app: Express = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(setupCors(config));
  app.use(setupHeaders());

  const { logger, httpLogger } = setupLogger(config);
  app.use(httpLogger);

  const router = Router();

  const strategies = {'local': LocalStrategy, 'github': GihubStrategy, 'google': GoogleStrategy};
  setupExtension({ 
    config,
    db,
    logger,
    app,
    router,
    passport,
    strategies,
    appDomain,
  });

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

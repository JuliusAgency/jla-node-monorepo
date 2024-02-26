import express, { Express, Router, Request, Response } from 'express';
import { setupCors, setupHeaders } from '../common';
import { setupErrorHandler } from '../common/error-handler';
import { setupLogger } from '../common/logger';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const startupServer = (config: any) => {
  const app: Express = express();
  app.use(express.json());

  app.use(setupCors());
  app.use(setupHeaders());

  const { logger, httpLogger } = setupLogger();
  app.use(httpLogger);

  const router = Router();
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
import express, { Express, Router, Request, Response } from 'express';

import { 
  setupCors,
  setupHeaders,
  setupErrorHandler,
  setupLogger,
} from '../common';

import { authentication } from '../extensions';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const startupServer = (config: any, sqlRepository: any) => {
  const app: Express = express();
  app.use(express.json());

  app.use(setupCors(config));
  app.use(setupHeaders());

  const { logger, httpLogger } = setupLogger(config);
  app.use(httpLogger);

  authentication(app, config, sqlRepository);
  
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
import express, { Express, Router, Request, Response } from 'express';

import { appConfig } from './configuration';

const app: Express = express();
app.use(express.json());

const router = Router();

// Live test root
router.get('/', (_req: Request, res: Response) => {
    res.json({ message: `Is live` });
});

app.use(router);


app.listen(appConfig.port, () => {
    console.log(`⚡️[server]: Server is running
      at: "${appConfig.baseUrl}:${appConfig.port}"
      in: "${appConfig.env}" environment`);
  });

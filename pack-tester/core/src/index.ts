import express, { Express, Router, Request, Response } from 'express';

import { appConfig } from './configuration';
import { dataBase } from './dbs';

const app: Express = express();
app.use(express.json());

const router = Router();
app.use(router);
router.get('/', (_req: Request, res: Response) => {
  res.json({ message: `Is live` });
});

dataBase('SQL').then((value) => {
  const configDbMap = value.configDbMap;
  const config = appConfig(configDbMap);
  const initDb = value.initDb;
  const { connectDb } = initDb(config, []);
  connectDb().then(()=> {
    app.listen(config.port, () => {
      console.log(`⚡️[server]: Server is running
        at: ${config.baseUrl}:${config.port}
        in: ${config.env} environment`);
    }); 
  });});

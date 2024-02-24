import express, { Express, Router, Request, Response } from 'express';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const startupServer = (config: any) => {
  const app: Express = express();
  app.use(express.json());
  
  const router = Router();
  app.use(router);
  router.get('/', (_req: Request, res: Response) => {
    res.json({ message: `Is live` });
  });
    
  app.listen(config.port, () => {
    console.log(`⚡️[server]: Server is running
      at: ${config.baseUrl}:${config.port}
      in: ${config.env} environment`);
  });  
};
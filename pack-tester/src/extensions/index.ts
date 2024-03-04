import { Express } from 'express';

import { setupAuthentication } from './ses-sql';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const authentication = (app: Express, config: any, db?: any) => {
  return setupAuthentication(app, config, db.sqlRepository);
};
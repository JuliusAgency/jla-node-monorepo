import { dataBase } from '../dbs';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const startupDb = async (config: any, dbType: string, entities?: any) => {
  const initDb = await dataBase(dbType);
  const db = initDb(config, entities);
  await db.connectDb();
  return db;
};
  
import { dataBase } from '../dbs';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const startupDb = async (config: any, dbType: string) => {
  const initDb = await dataBase(dbType);

  const db = initDb(config);
  await db.connectDb();
  return db;
};
  
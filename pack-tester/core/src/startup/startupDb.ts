import { appConfig } from '../configuration';
import { dataBase } from '../dbs';

const dbType = 'SQL';

export const startupDb = async () => {
  const { initDb, configDbMap } = await dataBase(dbType);
  // extend config by Db configuration
  const config = appConfig(configDbMap);
  const { connectDb } = initDb(config, []);
  await connectDb();

  return config;
};
  
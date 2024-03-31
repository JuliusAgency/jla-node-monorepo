import * as ext from '../../../extensions';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const startupDb = async (config: any, dbType: string, User: any) => {
  const initDb = await ext.dataBase(dbType);

  const rules = ext.rulesEntity(config);
  const entities = [User ? User : ext.BaseUser, ext.Token, rules];

  const db = await initDb(config, entities);
  return db;
};

import { BaseUser, Token, dataBase, rulesEntity } from '../../../extensions';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const startupDb = async (config: any, dbType: string, User: any) => {
  const initDb = await dataBase(dbType);

  const rules = rulesEntity(config);
  const entities = [User ? User : BaseUser, Token, rules];

  const db = await initDb(config, entities);
  return db;
};

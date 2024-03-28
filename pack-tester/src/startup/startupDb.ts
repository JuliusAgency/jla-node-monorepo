import { dataBase } from '../dbs';
import {
  BaseUser,
  Token,
  rulesEntity,
} from '../../../extensions';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const startupDb = async (config: any, dbType: string, User: any) => {
  const initDb = await dataBase(dbType);

  const rules = rulesEntity(config);
  const entities = [User? User : BaseUser, Token, rules];

  const db = initDb(config, entities);
  await db.connectDb();
  return db;
};

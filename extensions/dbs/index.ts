import * as sql from './sql';
import * as mongo from './mongo';

const dbs = {
  sql: sql.initDb,
  mongo: mongo.initDb,
};

export const dataBase = async (dbType: string) => {
  return await dbs[dbType.toLowerCase()];
};

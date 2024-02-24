import * as sql from "./sql";
import * as mongo from "./mongo";
export const dataBase = async (dbType: string) => {
  let initDb, configDbMap;
  if (dbType === 'SQL') {
    initDb = sql.initDb;
    configDbMap = sql.configDbMap;
  } else {
    initDb = mongo.initDb;
    configDbMap = mongo.configDbMap;
  }
  return { initDb, configDbMap };
};
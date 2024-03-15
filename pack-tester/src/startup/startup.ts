import { dbType, getConfigMapping } from '../initialization';
import { appConfig } from '../configuration';
import { 
  // BaseUser,
  Token 
} from '../extensions/ses-sql';

import { User } from '../app-domain';

import { startupDb } from './startupDb';
import { startupServer } from './startupServer';

export const startup = async () => {
  const configMap = getConfigMapping();
  // extend config by extensions configurations
  const config = appConfig(configMap);
  console.log(config);
  const entities = [User, Token];
  const db = await startupDb(config, dbType, entities);
  startupServer(config, db);
};

import { dbType, getConfigMapping } from '../initialization';
import { appConfig } from '../configuration';
import { 
  // BaseUser,
  Token 
} from '../extensions';

import { User, setupAppDomain } from '../app-domain';

import { startupDb } from './startupDb';
import { startupServer } from './startupServer';

export const startup = async () => {
  const configMapping = getConfigMapping();
  // extend config by extensions configurations
  const config = appConfig(configMapping);
  console.log(config);
  const entities = [User, Token];
  const db = await startupDb(config, dbType, entities);
  
  startupServer({ config, db, User, setupAppDomain });
};

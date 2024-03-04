import { dbType, getConfigMapping } from '../initialization';
import { appConfig } from '../configuration';

import { startupDb } from './startupDb';
import { startupServer } from './startupServer';

export const startup = async () => {
  const configMap = getConfigMapping();
  // extend config by extensions configurations
  const config = appConfig(configMap);
  console.log(config);

  const db = await startupDb(config, dbType);
  startupServer(config, db);
};

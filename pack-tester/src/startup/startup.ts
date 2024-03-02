// import { startupDb } from './startupDb';
import { getConfigMapping } from '../initialization';
import { appConfig } from '../configuration';

import { startupDb } from './startupDb';
import { startupServer } from './startupServer';

const dbType = 'SQL';

export const startup = async () => {
  const configMap = getConfigMapping(dbType);

  // extend config by extends configurations
  const config = appConfig(configMap);
  console.log(config);
    
  const sqlRepository = await startupDb(config, dbType);
  startupServer(config, sqlRepository);
};

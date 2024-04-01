import { dbType, getConfigMapping } from '../../../extensions';
import { appConfig } from '../configuration';

import * as appDomain from '../app-domain';

import { startupDb } from './startupDb';
import { setupExtension } from './setupExtension';
import { startupServer } from './startupServer';

export const startup = async () => {
  const configMapping = getConfigMapping();

  // extend config by extensions configurations
  const config = appConfig(configMapping);
  console.log(config);

  const db = await startupDb(config, dbType, appDomain.User);

  startupServer({ config, db, setupExtension, appDomain });
};

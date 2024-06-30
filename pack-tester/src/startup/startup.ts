import { dbType, getConfigMapping } from '../../../extensions';
import { appConfig } from '../configuration';

import * as appDomain from '../app-domain';

import { startupDb } from './startup-db';
import { authExtension, authorizationExtension } from './auth-extension';
import { ServerDependencies, startupServer } from './startup-server';

export const startup = async () => {
  const configMapping = getConfigMapping();

  // extend config by extensions configurations
  const config = appConfig(configMapping);

  const db = await startupDb(config, dbType, appDomain.User);

  const serverDependencies: ServerDependencies = {
    config: config,
    db: db,
    authExtension: authExtension,
    authorizationExtension: authorizationExtension,
    appDomain,
  };
  await startupServer(serverDependencies);
};

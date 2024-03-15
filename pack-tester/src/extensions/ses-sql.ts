import { Express } from 'express';

import { 
  AuthConfig,
  AuthSesSetSetupOptions,
  BaseUser,
  Token,
  authSetSetup
} from '@juliusagency/auth-ses-sql-set';

export {
  BaseUser,
  Token,
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setupAuthentication = (app: Express, config: any, sqlRepository?: any) => {

  // Setup Auth with session and Sql Db
  const authConfig: AuthConfig = {
    app: app,
    User: BaseUser,
    sessionConfig: config.session,
  };

  const authSetupOptions: AuthSesSetSetupOptions = {
    authConfig: authConfig,
    // emailer: emailer,
    repository: sqlRepository,
  };

  return authSetSetup(authSetupOptions);
};
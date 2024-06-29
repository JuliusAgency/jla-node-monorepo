/* eslint-disable @typescript-eslint/no-explicit-any */
// Auth type and Db relations
import { BaseUser, dBApi, Token } from '../../packages/base-user-sql/src';

import { AuthOptions } from '../shared';
import { setupAuthenticationShared } from '../shared/authentication';
import { sesMiddleware } from '../shared/ses-middleware';

// Reexport
export { BaseUser, Token };

// Setup Auth with session and Sql Db
export const setupAuthentication = (authOptions: AuthOptions) => {

  authOptions['withSession'] = true;

  // Wrap up the User and the Token
  authOptions.user = dBApi(authOptions.db(authOptions.user ? authOptions.user : BaseUser));
  const authOptionsShared = {...authOptions, token: dBApi(authOptions.db(Token))};

  const authMiddleware = sesMiddleware(authOptions);

  return { ...setupAuthenticationShared(authOptionsShared), authMiddleware};
};

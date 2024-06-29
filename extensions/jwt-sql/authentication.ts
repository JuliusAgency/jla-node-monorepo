/* eslint-disable @typescript-eslint/no-explicit-any */
// Auth type and Db relations
import { BaseUser, dBApi, Token } from '../../packages/base-user-sql/src';

import { AuthOptions } from '../shared';
import { setupAuthenticationShared } from '../shared/authentication';
import { jwtMiddleware } from '../shared/jwt-middleware';

// Reexport
export { BaseUser, Token };

// Setup Auth with JWT and Sql Db
export const setupAuthentication = (authOptions: AuthOptions) => {

  authOptions['withSession'] = false;

  // Wrap up the User and the Token
  authOptions.user = dBApi(authOptions.db(authOptions.user ? authOptions.user : BaseUser));
  const authOptionsShared = {...authOptions, token: dBApi(authOptions.db(Token))};

  const { authMiddleware, encodeToken } = jwtMiddleware(authOptions);

  authOptionsShared['encode'] = encodeToken;

  return { ...setupAuthenticationShared(authOptionsShared), authMiddleware};
};

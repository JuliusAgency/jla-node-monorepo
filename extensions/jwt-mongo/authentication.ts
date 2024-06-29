/* eslint-disable @typescript-eslint/no-explicit-any */
// Auth type and Db relations
import { BaseUser, dBApi, Token } from '../../packages/base-user-mongo/src';

import { AuthOptions } from '../shared';
import { setupAuthenticationShared } from '../shared/authentication';
import { jwtMiddleware } from '../shared/jwt-middleware';

// Reexport
export { BaseUser, Token };


// Setup Auth with session and Mongo Db
export const setupAuthentication = (authOptions: AuthOptions) => {

  authOptions['withSession'] = false;

  // Wrap up the User and the Token
  authOptions.user = dBApi(authOptions.user ? authOptions.user : BaseUser);
  const authOptionsShared = {...authOptions, token: dBApi(Token)};

  const { authMiddleware, encodeToken } = jwtMiddleware(authOptions);

  authOptionsShared['encode'] = encodeToken;

  return { ...setupAuthenticationShared(authOptionsShared), authMiddleware};
};

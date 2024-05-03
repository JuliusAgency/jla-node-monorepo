/***
 * Define passport social strategy
 *
 * To authenticate, Passport first initiates
 * an OAuth 2.0 flow by redirecting the user to a Social Media's identity server 
 * with the clientID and clientSecret.
 * Once the identity server has completed their interaction with the user, 
 * the user will be redirected back to the app at callbackUrl.
 * 
 * When a new user signs in, a user account is
 * automatically created and their Social account is linked.  
 * When an existing user returns, 
 * they are signed in to their linked account.
 * 
 * When you use sessions with Passport, as soon as a user gets appropriately authenticated,
 *  a new session begins.
 * When this transpires, we serialize the user data to the session
 *  and the user ID is stored in req.session.passport.user.
 * To access the user data it is deserialized, using the user ID as its key.
 * The user data is queried and attached to req.user
 */

import { StrategyOptions } from '.';

export const initStrategy = (options: StrategyOptions) => {
  const logger = options.logger;
  logger.debug(`Init strategy - ${options.strategy.name} - ${__filename}`);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const login = async (accessToken: string, refreshToken: string, profile: any, done: any) => {
    /**
     * This callback function receives an accessToken and refreshToken
     * accessToken - allows the application to make API requests to access or 
     * modify user data on their behalf.
       * accessToken - expire after a certain time, so we use refreshToken to refresh them.
     */
    logger.debug(`accessToken - ${accessToken}`);
    logger.debug(`refreshToken - ${refreshToken}`);
    logger.debug(`profile - ${profile.provider} - id - ${profile.id}`);

    options.verify(accessToken, refreshToken, profile, done); 

  };
  // configure the login strategy.
  return new options.strategy(
    {
      clientID: options.clientId,
      clientSecret: options.clientSecret,
      callbackURL: options.callbackUrl,
    },
    login,
  );
};

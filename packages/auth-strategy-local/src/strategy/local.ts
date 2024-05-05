/***
 * Define passport local strategy
 *
 * To authenticate, Passport first looks at the user's login details,
 *  then invokes a verified callback (done).
 * If the user gets properly authenticated, pass the user into the callback.
 * If the user does not get appropriately authenticated, pass false into the callback.
 * You also have the option to pass a specific message into the callback.
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
  logger?.debug(`Init strategy - ${options.strategy.name} - ${__filename}`);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const login = async (usernameField: string, password: string, done: any) => {
    logger?.debug(`usernameField - ${usernameField}`);
    options.verify(options.loginFieldName, usernameField, password, done); 
  };
  // configure the login strategy.
  return new options.strategy(
    {
      usernameField: options.loginFieldName,
      passwordField: 'password',
    },
    login,
  );
};

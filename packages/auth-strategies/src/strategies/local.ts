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

import { Request } from 'express';
import passport from 'passport';
import { Strategy } from 'passport-local';
import { cryptUtils } from '../utils';
import { StrategyOptions } from '.';

class LocalStrategy {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public static init(options: StrategyOptions): void {
    const { dBApi, salt } = options;
    const crypt = cryptUtils();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const register = async (req: Request, usernameField: string, password: string, done: any) => {
      try {
        if (!usernameField) {
          done(null, false);
        }
        if (options.loginFieldName === 'email') {
          usernameField = usernameField.toLowerCase();
        };
        const user = await dBApi.findOne({ [options.loginFieldName]: usernameField });
        if (user) {
          done(null, false, { message: 'User already exist' });
        } else {
          const newUser = req.body;
          newUser.password = await crypt.hash(password, salt);
          newUser.createdAt = new Date();
          try {
            const user = await dBApi.save(newUser);
            done(null, user);
          } catch (e) {
            done(e);
          }
        }
      } catch (e) {
        done(e);
      }
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const login = async (usernameField: string, password: string, done: any) => {
      try {
        if (!usernameField) {
          done(null, false);
        }
        if (options.loginFieldName === 'email') {
          usernameField = usernameField.toLowerCase();
        };
        const user = await dBApi.findOne({ [options.loginFieldName]: usernameField });

        if (!user) {
          return done(null, false, { message: 'User not found.' });
        }
        if (user && user[options.loginFieldName] != usernameField) {
          done(null, false, { message: 'User or password incorrect' });
        }
        if (!(await crypt.compare(password, user.password))) {
          done(null, false, { message: 'User or password incorrect' });
        } else {
          done(null, user);
        }
      } catch (e) {
        done(e);
      }
    };

    // configure the register strategy.
    passport.use(
      'local-register',
      new Strategy(
        {
          // by default, local strategy uses username and password,
          // we will override with email
          usernameField: options.loginFieldName,
          passwordField: 'password',
          // allows to pass the entire request to the callback
          passReqToCallback: true,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        },
        register,
      ),
    );

    // configure the login strategy.
    passport.use(
      'local-login',
      new Strategy(
        {
          usernameField: options.loginFieldName,
          passwordField: 'password',
        },
        login,
      ),
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }
}

export { LocalStrategy };

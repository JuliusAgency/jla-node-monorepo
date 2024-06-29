import { AuthConfig, SessionConfig, setupAuthMiddleware } from '../../packages/auth-session/src';
import { AuthOptions } from './types';

// Middleware
  export const sesMiddleware = (authOptions: AuthOptions) => {
    const { app, passport, config, user} = authOptions;
    // Session
    const sesConfig: SessionConfig = {
      name: config.session.name,
      secret: config.session.secret,
      saveUninitialized: config.session.saveUninitialized,
      cookie: {
        secure: config.session.cookie.secure,
        sameSite: config.session.cookie.sameSite,
        httpOnly: config.session.cookie.httpOnly,
        maxAge: config.session.cookie.maxAge,
      },
      resave: config.session.resave,
    };

    // Auth middleware setup
    const authConfig: AuthConfig = {
      app: app,
      passport: passport,
      User: user,
      sessionConfig: sesConfig,
    };
    return setupAuthMiddleware(authConfig);
  };

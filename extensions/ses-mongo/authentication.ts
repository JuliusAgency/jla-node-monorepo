import { AuthMngrOPtions, setupAuthManager } from '../../packages/base-user-mngr/src';
import { initStrategy, StrategyOptions } from '../../packages/auth-strategy-local/src';
import { AuthConfig, SessionConfig, setupAuthMiddleware } from '../../packages/auth-session/src';
import { BaseUser, dBApi, Token } from '../../packages/base-user-mongo/src';

// Reexport
export { BaseUser, Token };

// Setup Auth with session and Sql Db
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setupAuthentication = (authOptions: any) => {
  const { app, config, db, User } = authOptions;
  // Wrap up the User and the Token
  console.log(db.name);
  const user = dBApi(User ? User : BaseUser);
  const token = dBApi(Token);

  // Setup the strategy and the user manager with the user
  // Strategy
  const strategyOptions: StrategyOptions = {
    dBApi: user,
    salt: config.salt,
  };

  const strategy = initStrategy(strategyOptions);

  // User manager
  const authMngrOPtions: AuthMngrOPtions = {
    User: user,
    strategy: strategy,
    salt: config.salt,
    session: true,
    Token: token,
    emailer: config.emailer,
  };
  const authRouter = setupAuthManager(authMngrOPtions);

  // Session
  const sesConfig: SessionConfig = {
    name: config.sessionName,
    secret: config.sessionSecret,
    saveUninitialized: config.sessionSaveUninitialized,
    cookie: {
      secure: config.cookieSecure,
      sameSite: config.cookieSameSite,
      httpOnly: config.cookieHttpOnly,
      maxAge: config.cookieMaxAge,
    },
    resave: config.sessionResave,
  };

  // Auth middleware setup
  const authConfig: AuthConfig = {
    app: app,
    User: user,
    sessionConfig: sesConfig,
  };
  const authMiddleware = setupAuthMiddleware(authConfig);

  return { authRouter, authMiddleware };
};

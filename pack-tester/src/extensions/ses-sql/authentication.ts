import {
  AuthMngrOPtions,
  setupAuthManager,
} from '../../../../packages/base-user-mngr';
import {
  initStrategies,
  StrategyOptions,
} from '../../../../packages/auth-strategies';
import { 
  BaseUser, 
  dBApi,
  Token } from '@juliusagency/base-user-sql';
import {
  AuthConfig,
  SessionConfig,
  setupAuthMiddleware,
} from '../../../../packages/auth-session';

// Reexport
export { BaseUser,Token };
 
// Setup Auth with session and Sql Db
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setupAuthenticationSet = ({ app, config, db, User }) => {

  // Wrap up the User and the Token
  const user = dBApi(db.sqlRepository(User ? User: BaseUser));
  const token = dBApi(db.sqlRepository(Token));

  // Setup the strategy and the user manager with the user
  // Strategy
  const strategyOptions: StrategyOptions = {
    dBApi: user,
  };

  const strategy = initStrategies(strategyOptions);

  // User manager
  const authMngrOPtions: AuthMngrOPtions = {
    User: user,
    strategy: strategy,
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

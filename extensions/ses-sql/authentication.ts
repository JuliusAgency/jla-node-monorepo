import { AuthConfig, SessionConfig, setupAuthMiddleware } from '../../packages/auth-session/src';
import { BaseUser, dBApi, Token } from '../../packages/base-user-sql/src';
import { cryptUtils, CryptUtilsOptions } from '../../packages/auth-utils/src';
import { initVerify, VerifyOptions } from '../../packages/auth-verify-service/src';
import { initStrategy as InitLocal, StrategyOptions } from '../../packages/auth-strategy-local/src';
import { AuthMngrOptions, initAuthMngr } from '../../packages/auth-mngr/src';
import { UserMngrOPtions, setupUserManager } from '../../packages/auth-user-mngr/src';

// Reexport
export { BaseUser, Token };

// Setup Auth with session and Sql Db
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setupAuthentication = (authOptions: any) => {
  const { app, config, db, router, passport, User } = authOptions;
  console.log(db.name);
  // Wrap up the User and the Token
  const user = dBApi(db(User ? User : BaseUser));
  const token = dBApi(db(Token));

  // Setup the strategy and the user manager with the user
  // Strategy
  const cryptUtilsOptions: CryptUtilsOptions = {
    salt: Number(config.salt),
  };

  const utils = cryptUtils(cryptUtilsOptions);

  const verifyOptions: VerifyOptions = {
    dBApi: user,
    utils: utils,
  };

  const verifyUser = initVerify(verifyOptions);

  const strategyOptions: StrategyOptions = {
    verify: verifyUser,
    loginFieldName: config.loginFieldName,
  };

  const local = InitLocal(strategyOptions);

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
    resave: config.session.sessionResave,
  };

  const authConfig: AuthConfig = {
    app: app,
    passport: passport,
    User: user,
    sessionConfig: sesConfig,
  };
  const authMiddleware = setupAuthMiddleware(authConfig);

  // Auth manager
  const authMngrOptions: AuthMngrOptions = {
    router: router,
    passport: passport,
    session: true,
    encode: null,
    strategies: [local],
  };
  const authRouter = initAuthMngr(authMngrOptions);

  // User manager
  const userMngrOPtions: UserMngrOPtions = {
    User: user,
    Token: token,
    utils: utils,
    session: true,
    emailer: config.emailer,
  };
  const userMngrRouter = setupUserManager(userMngrOPtions);

  return { authRouter, userMngrRouter, authMiddleware };
};

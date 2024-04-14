import { AuthMngrOPtions, setupAuthManager } from '../../packages/base-user-mngr/src';
import { initStrategy, StrategyOptions } from '../../packages/auth-strategy-local/src';
import { AuthJwtOptions, setupAuthMiddleware } from '../../packages/auth-jwt/src';
import { BaseUser, dBApi, Token } from '../../packages/base-user-mongo/src';

// Reexport
export { BaseUser, Token };

// Setup Auth with session and Sql Db
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setupAuthentication = ({ config, db, User }) => {
  // Wrap up the User and the Token
  console.log(db.name);
  const user = dBApi(User ? User : BaseUser);
  const token = dBApi(Token);

  // Setup the strategy and the user manager with the user
  // Strategy
  const strategyOptions: StrategyOptions = {
    dBApi: user,
    salt: config.salt,
    loginFieldName: config.loginFieldName,
  };

  const strategy = initStrategy(strategyOptions);

  // Auth middleware setup
  const authOpt: AuthJwtOptions = {
    lifeTime: config.lifeTime,
    secretKey: config.secretKey,
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { authMiddleware, encodeToken } = setupAuthMiddleware(authOpt);

  // User manager
  const authMngrOPtions: AuthMngrOPtions = {
    User: user,
    strategy: strategy,
    salt: config.salt,
    encode: encodeToken,
    session: false,
    Token: token,
    emailer: config.emailer,
    loginFieldName: config.loginFieldName,
  };
  const authRouter = setupAuthManager(authMngrOPtions);

  return { authRouter, authMiddleware };
};

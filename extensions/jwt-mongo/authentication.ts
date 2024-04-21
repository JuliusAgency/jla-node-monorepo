import { AuthMngrOptions, initAuthMngr } from '../../packages/auth-mngr/src';
import { cryptUtils, CryptUtilsOptions } from '../../packages/auth-utils/src';
import { initVerify, VerifyOptions } from '../../packages/auth-verify-service/src';
import { initStrategy as InitLocal, StrategyOptions } from '../../packages/auth-strategy-local/src';
import { AuthJwtOptions, setupAuthMiddleware } from '../../packages/auth-jwt/src';
import { BaseUser, dBApi, Token } from '../../packages/base-user-mongo/src';

// Reexport
export { BaseUser, Token };

// Setup Auth with session and Sql Db
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setupAuthentication = ({ config, db, router, passport, User }) => {
  // Wrap up the User and the Token
  console.log(db.name);
  const user = dBApi(User ? User : BaseUser);
  // const token = dBApi(Token);

  // Setup the strategy and the user manager with the user
  // Strategy
  const cryptUtilsOptions: CryptUtilsOptions = {
    salt: config.salt,
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

  // passport.use('local-login', strategy);

  // Auth middleware setup
  const authOpt: AuthJwtOptions = {
    lifeTime: config.lifeTime,
    secretKey: config.secretKey,
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { authMiddleware, encodeToken } = setupAuthMiddleware(authOpt);

  // Auth manager
  const authMngrOptions: AuthMngrOptions = {
    router: router,
    passport: passport,
    session: false,
    encode: encodeToken,
    strategies: [local],
  };

  const authRouter = initAuthMngr(authMngrOptions);

  return { authRouter, authMiddleware };
};

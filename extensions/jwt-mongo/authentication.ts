/* eslint-disable @typescript-eslint/no-explicit-any */
import { AuthJwtOptions, setupAuthMiddleware } from '../../packages/auth-jwt/src';
import { BaseUser, dBApi, Token } from '../../packages/base-user-mongo/src';
import { cryptUtils, CryptUtilsOptions } from '../../packages/auth-utils/src';
import { AuthMngrOptions, AuthMngrOptionsCommon, AuthStrategyDef, initAuthMngr } from '../../packages/auth-mngr/src';
import { UserMngrOPtions, setupUserManager } from '../../packages/auth-user-mngr/src';
import { initVerify, VerifyOptions } from '../../packages/auth-verify-service/src';
import { initStrategy as InitLocal, StrategyOptions as StrategyOptionsLocal } from '../../packages/auth-strategy-local/src';

import { initVerify as initVerifySocial, VerifyOptions as VerifyOptionsSocial } from '../../packages/auth-verify-service-social/src';
import { initStrategy as InitSocial, StrategyOptions as StrategyOptionsSocial } from '../../packages/auth-strategy-social/src';


// Reexport
export { BaseUser, Token };

export type authOptions = {
  app: any;
  router: any;
  passport: any;
  strategies: any;
  config: any;
  db: any;
  User: any;
  logger: any;
};

// Setup Auth with session and Sql Db
export const setupAuthentication = (authOptions: any) => {
  const { config, db, logger, router, passport, strategies, User } = authOptions;
  // Wrap up the User and the Token
  console.log(db.name);
  const user = dBApi(User ? User : BaseUser);
  const token = dBApi(Token);

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

  const verifyLocal = initVerify(verifyOptions);

  const strategyOptionsLocal: StrategyOptionsLocal = {
    verify: verifyLocal,
    strategy: strategies.local,
    loginFieldName: config.loginFieldName,
    logger: logger,
  };

  const local = InitLocal(strategyOptionsLocal);

  const verifyOptionsGiyhub: VerifyOptionsSocial = {
    dBApi: user,
    logger: logger,
  };

  const verifyGithub = initVerifySocial(verifyOptionsGiyhub);

  const strategyOptions: StrategyOptionsSocial = {
    verify: verifyGithub,
    strategy: strategies.github,
    clientId: config.githubId,
    clientSecret: config.githubSecret,
    callbackUrl: config.githubCallback,
    logger: logger,
  };

  const github = InitSocial(strategyOptions);

  // Auth middleware setup
  const authOpt: AuthJwtOptions = {
    lifeTime: config.lifeTime,
    secretKey: config.secretKey,
  };
  const { authMiddleware, encodeToken } = setupAuthMiddleware(authOpt);

  // Auth manager
  const localStrategyDef: AuthStrategyDef = {
    passport: passport,
    strategy: local,
  };
  const githubStrategyDef: AuthStrategyDef = {
    passport: passport,
    strategy: github,
  };

  const authMngrOptionsCommon: AuthMngrOptionsCommon = {
    router: router,
    User: user,
    utils: utils,
    session: false,
    encode: encodeToken,
    logger: logger,
  };
  const authMngrOptions: AuthMngrOptions = {
    strategiesDef: [localStrategyDef, githubStrategyDef],
    common: authMngrOptionsCommon,
  };
  const authRouter = initAuthMngr(authMngrOptions);

  // User manager
  const userMngrOPtions: UserMngrOPtions = {
    User: user,
    Token: token,
    utils: utils,
    session: false,
    emailer: config.emailer,
  };
  const userMngrRouter = setupUserManager(userMngrOPtions);

  return { authRouter, userMngrRouter, authMiddleware };
};

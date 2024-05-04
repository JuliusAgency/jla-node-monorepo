/* eslint-disable @typescript-eslint/no-explicit-any */
// Auth type and Db relations
import { AuthJwtOptions, setupAuthMiddleware } from '../../packages/auth-jwt/src';
import { BaseUser, dBApi, Token } from '../../packages/base-user-mongo/src';

import { cryptUtils, CryptUtilsOptions } from '../../packages/auth-utils/src';
import { AuthMngrOptions, AuthMngrOptionsCommon, AuthStrategyDef, initAuthMngr } from '../../packages/auth-mngr/src';

import { initVerify, VerifyOptions } from '../../packages/auth-verify-service/src';
import { initStrategy as InitLocal, StrategyOptions as StrategyOptionsLocal } from '../../packages/auth-strategy-local/src';
import { initVerify as initVerifySocial, VerifyOptions as VerifyOptionsSocial } from '../../packages/auth-verify-service-social/src';
import { initStrategy as InitSocial, StrategyOptions as StrategyOptionsSocial } from '../../packages/auth-strategy-social/src';

import { UserMngrOPtions, setupUserManager } from '../../packages/auth-user-mngr/src';

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

  // Auth middleware setup
  const authOpt: AuthJwtOptions = {
    lifeTime: config.lifeTime,
    secretKey: config.secretKey,
  };
  const { authMiddleware, encodeToken } = setupAuthMiddleware(authOpt);

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
  const strategyOptionsGithub: StrategyOptionsSocial = {
    verify: verifyGithub,
    strategy: strategies.github,
    clientId: config.githubId,
    clientSecret: config.githubSecret,
    callbackUrl: config.githubCallback,
    logger: logger,
  };
  const github = InitSocial(strategyOptionsGithub);

  const verifyOptionsGoogle: VerifyOptionsSocial = {
    dBApi: user,
    logger: logger,
  };
  const verifyGoogle = initVerifySocial(verifyOptionsGoogle);
  const strategyOptionsGgoogle: StrategyOptionsSocial = {
    verify: verifyGoogle,
    strategy: strategies.google,
    clientId: config.googleId,
    clientSecret: config.googleSecret,
    callbackUrl: config.googleCallback,
    logger: logger,
  };

  const google = InitSocial(strategyOptionsGgoogle);

  // const validation = (req: any, _res: any, next: any) => {
  //   const { email } = req.body;
  //   logger.debug(`request body -${email}`);
  //   if (email === 'user1@gmail.com') {
  //     next();
  //   } else {
  //     throw new Error('bad credentials');
  //   }
  // };

  // Auth manager
  const localStrategyDef: AuthStrategyDef = {
    passport: passport,
    strategy: local,
    // validation: validation,
  };
  const githubStrategyDef: AuthStrategyDef = {
    passport: passport,
    strategy: github,
  };
  const googleStrategyDef: AuthStrategyDef = {
    passport: passport,
    strategy: google,
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
    strategiesDef: [localStrategyDef, githubStrategyDef, googleStrategyDef],
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

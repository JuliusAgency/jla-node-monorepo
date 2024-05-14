/* eslint-disable @typescript-eslint/no-explicit-any */
// Auth type and Db relations
import { AuthConfig, SessionConfig, setupAuthMiddleware } from '../../packages/auth-session/src';
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

export type AuthOptions = {
  app: any;
  passport: any;
  config: any;
  db: any;
  User: any;
  logger: any;
};

export type StrategyOptions = {
  router: any;
  strategies: any;
  strategyPath?: string;
  socialstrategyName: string;
  socialIdFieldName?: string;
};

// Setup Auth with session and Mongo Db
export const setupAuthentication = (authOptions: AuthOptions) => {
  const { app, config, db, logger, passport, User } = authOptions;
  // Wrap up the User and the Token
  console.log(db.name);
  const user = dBApi(User ? User : BaseUser);
  const token = dBApi(Token);

  const cryptUtilsOptions: CryptUtilsOptions = {
    salt: Number(config.salt),
  };

  const utils = cryptUtils(cryptUtilsOptions);

  // Middleware
  const sessionMiddleware = () => {
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

  // Auth manager
  const authMngr = (options: StrategyOptions) => {
    const { router, strategies, strategyPath, socialstrategyName, socialIdFieldName } = options;

    const localStrategy = () => {
      const verifyOptions: VerifyOptions = {
        dBApi: user,
        utils: utils,
        logger: logger,
      };
    
      const verifyLocal = initVerify(verifyOptions);
      const strategyOptionsLocal: StrategyOptionsLocal = {
        verify: verifyLocal,
        strategy: strategies.local,
        strategyPath: strategyPath,
        loginFieldName: config.loginFieldName,
        logger: logger,
      };
      return InitLocal(strategyOptionsLocal);  
    };

    const socialStrategy = () => {
      const verifyOptionsSocial: VerifyOptionsSocial = {
        dBApi: user,
        socialIdFieldName: socialIdFieldName,
        logger: logger,
      };
      const verifySocial = initVerifySocial(verifyOptionsSocial);
      const strategyOptionsSocial: StrategyOptionsSocial = {
        verify: verifySocial,
        strategy: strategies[socialstrategyName],
        strategyName: socialstrategyName,
        strategyPath: strategyPath,
        clientId: config.githubId,
        clientSecret: config.githubSecret,
        callbackUrl: config.githubCallback,
        logger: logger,
      };
      return InitSocial(strategyOptionsSocial);     
    };

    const local = localStrategy();
    const social = socialStrategy();

    // Auth manager
    const localStrategyDef: AuthStrategyDef = {
      passport: passport,
      strategy: local,
      // validation: validation,
    };
    const githubStrategyDef: AuthStrategyDef = {
      passport: passport,
      strategy: social,
    };
  
    const authMngrOptionsCommon: AuthMngrOptionsCommon = {
      router: router,
      User: user,
      utils: utils,
      session: true,
      encode: null,
      logger: logger,
    };
    const authMngrOptions: AuthMngrOptions = {
      strategiesDef: [localStrategyDef, githubStrategyDef],
      common: authMngrOptionsCommon,
    };
    return initAuthMngr(authMngrOptions); 
  };

  // Password manager
  const passwordMngr = () => {
    const userMngrOPtions: UserMngrOPtions = {
      User: user,
      Token: token,
      utils: utils,
      session: true,
      emailer: config.emailer,
    };
    return setupUserManager(userMngrOPtions);
  };

  return { 
    authMngr,
    passwordMngr,
    sessionMiddleware,
  };
};

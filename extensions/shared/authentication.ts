/* eslint-disable @typescript-eslint/no-explicit-any */
import { cryptUtils, CryptUtilsOptions } from '../../packages/auth-utils/src';
import { AuthMngrOptions, AuthMngrOptionsCommon, AuthStrategyDef, initAuthMngr } from '../../packages/auth-mngr/src';

import { initVerify, VerifyOptions } from '../../packages/auth-verify-service/src';
import { initStrategy as InitLocal, StrategyOptions as StrategyOptionsLocal } from '../../packages/auth-strategy-local/src';
import { initVerify as initVerifySocial, VerifyOptions as VerifyOptionsSocial } from '../../packages/auth-verify-service-social/src';
import { initStrategy as InitSocial, StrategyOptions as StrategyOptionsSocial } from '../../packages/auth-strategy-social/src';

import { UserMngrOPtions, setupUserManager } from '../../packages/auth-user-mngr/src';

import { AuthOptionsShared, StrategiesPathOptions } from './types';

// Setup Auth with session and Mongo Db
export const setupAuthenticationShared = (authOptionsShared: AuthOptionsShared) => {
  const { config, logger, emailer, passport, user, token } = authOptionsShared;

  const cryptUtilsOptions: CryptUtilsOptions = {
    salt: Number(config.salt),
  };

  const utils = cryptUtils(cryptUtilsOptions);

  // Auth manager
  const authMngr = (options: StrategiesPathOptions) => {
    const { router, strategies, strategyPath, strategiesConfig } = options;

    const localStrategy = (strategy: object, strategyConfig: object) => {
      const verifyOptions: VerifyOptions = {
        dBApi: user,
        utils: utils,
        logger: logger,
      };   
      const verifyLocal = initVerify(verifyOptions);

      const strategyOptionsLocal: StrategyOptionsLocal = {
        verify: verifyLocal,
        strategy: strategy,
        strategyPath: strategyPath,
        loginFieldName: strategyConfig['loginFieldName'],
        logger: logger,
      };
      return InitLocal(strategyOptionsLocal);  
    };

    const socialStrategy = (strategyName: string, strategy: object, strategyConfig: object) => {
      const verifyOptionsSocial: VerifyOptionsSocial = {
        dBApi: user,
        socialIdFieldName: strategyConfig['idFieldName'],
        logger: logger,
      };
      const verifySocial = initVerifySocial(verifyOptionsSocial);
      const strategyOptionsSocial: StrategyOptionsSocial = {
        verify: verifySocial,
        strategy: strategy,
        strategyName: strategyName,
        strategyPath: strategyPath,
        clientId: strategyConfig['id'],
        clientSecret: strategyConfig['secret'],
        callbackUrl: strategyConfig['callback'],
        logger: logger,
      };
      return InitSocial(strategyOptionsSocial);     
    };

    const strategiesDef: Array<AuthStrategyDef> = [];
    Object.entries(strategies).forEach(([name, strategy]) => {
      const strategyConfig = strategiesConfig[name];
      if (name === 'local') {
        const local = localStrategy(strategy, strategyConfig);
        const strategyDef: AuthStrategyDef = {
          passport: passport,
          strategy: local,
          // validation: validation,
          // outputFilter: filter
        };
        strategiesDef.push(strategyDef); 
      } else {
        const social = socialStrategy(name, strategy, strategyConfig);
        const strategyDef: AuthStrategyDef = {
          passport: passport,
          strategy: social,
          // validation: validation,
          // outputFilter: filter
        };
        strategiesDef.push(strategyDef); 
      }
    });    
 
    const authMngrOptionsCommon: AuthMngrOptionsCommon = {
      router: router,
      User: user,
      utils: utils,
      session: authOptionsShared['withSession'],
      encode: authOptionsShared['encode'],
      logger: logger,
    };
    const authMngrOptions: AuthMngrOptions = {
      strategiesDef: strategiesDef,
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
      session: authOptionsShared['withSession'],
      emailer: emailer,
      logger: logger,
      frontEndUrl: config.emailer.frontEndUrl,
    };
    return setupUserManager(userMngrOPtions);
  };

  return { 
    authMngr,
    passwordMngr,
    // sessionMiddleware,
  };
};

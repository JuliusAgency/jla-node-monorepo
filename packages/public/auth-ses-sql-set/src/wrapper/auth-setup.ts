import { AuthMngrOPtions, setupAuthManager } from '@juliusagency/base-user-mngr';
import { initStrategies, StrategyOptions } from '@juliusagency/auth-strategies';
import { BaseUser, dBApi, Token } from '@juliusagency/base-user-sql';
import {
  AuthConfig,
  SessionConfig,
  setupAuthMiddleware,
} from '@juliusagency/auth-session';

// Reexport from the packages
export {
  AuthConfig,
  BaseUser,
  SessionConfig,
  Token,
};

export type AuthSesSetSetupOptions = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  authConfig: AuthConfig;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  emailer?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  repository: any;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const authSetSetup = (config: AuthSesSetSetupOptions) => {
  // Wrap up the User
  const user = dBApi(config.repository(config.authConfig.User));
  const token = dBApi(config.repository(Token));

  const strategyOptions: StrategyOptions = {
    dBApi: user,
  };

  const strategy = initStrategies(strategyOptions);

  const authMngrOPtions: AuthMngrOPtions = {
    User: user,
    strategy: strategy,
    session: true,
    Token: token,
    emailer: config.emailer,
  };
  const authRouter = setupAuthManager(authMngrOPtions);

  config.authConfig.User = user;
  // Auth middleware setup
  const authMiddleware = setupAuthMiddleware(config.authConfig);

  return { authRouter, authMiddleware };
};
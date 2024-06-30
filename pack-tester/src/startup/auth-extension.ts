/* eslint-disable @typescript-eslint/no-explicit-any */
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as GihubStrategy } from 'passport-github2';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

import { authentication, AuthOptions, authorization, StrategiesPathOptions } from '../../../extensions';

export type AuthExtensionDependencies = {
  config: any;
  db: any;
  logger: any;
  emailer?: any;
  app: any;
  router: any;
  Router: any;
  appDomain: any;
};

export const authExtension = async (dependencies: AuthExtensionDependencies) => {
  const { config, db, logger, emailer, app, router, Router, appDomain } = dependencies;
  const User = appDomain.User;

  const strategies = { local: LocalStrategy, github: GihubStrategy, google: GoogleStrategy };

  const authOptions: AuthOptions = {
    app: app,
    passport: passport,
    config: config,
    db: db,
    user: User,
    logger: logger,
    emailer: emailer,
  };

  const { authMngr, passwordMngr, authMiddleware } = authentication(authOptions);

  // Build routers for each strategy on each authentication path
  const authRouters = buildAuthRouters(config, logger, authMngr, Router, strategies);

  // Auth router usage
  authRouters.forEach((ar) => {
    Object.entries(ar).forEach(([p, r]) => {
      router.use(`/${p}`, r);
    });
  });

  const passwordRouter = passwordMngr();
  router.use('/passw', passwordRouter);

  // Auth middleware usage
  app.use(appDomain.protectedRoutes, authMiddleware);
};

export type AuthorizationExtensionDependencies = {
  config: any;
  db: any;
};
export const authorizationExtension = async (options: AuthorizationExtensionDependencies) => {
  return await authorization(options);
};

const buildAuthRouters = (config: any, logger: any, authMngr: any, Router: any, strategies: any): Array<any> => {
  const authRouters = [];
  config.strategyNameSets.pathes.forEach((p: string) => {
    const strategyNamesForPath = config.strategyNameSets[p].names;
    // Init strategies for the path
    const strategiesForPath = {};
    strategyNamesForPath.forEach((name: any) => {
      strategiesForPath[name] = strategies[name];
    });
    const authStrategyOptions: StrategiesPathOptions = {
      router: Router(),
      strategies: strategiesForPath,
      strategyPath: p,
      strategiesConfig: config.strategyNameSets[p],
    };
    logger.debug(`Start setup Auth manager for the path - (${p}) with the strategies [${strategyNamesForPath}]`);
    const authRouter = authMngr(authStrategyOptions);
    authRouters.push({ [p]: authRouter });
  });

  return authRouters;
};

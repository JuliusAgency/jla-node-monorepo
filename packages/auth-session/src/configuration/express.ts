/* eslint-disable @typescript-eslint/no-explicit-any */
import session from "express-session";
import { initSession } from "./session";

import { setupPassport } from "./passport";
import { AuthConfig } from "./types";

export const setupExpress = (authConfig: AuthConfig) => {
  // setup session
  const sessionOptions = initSession(authConfig.sessionConfig);
  authConfig.app.use(session({ ...sessionOptions, ...authConfig.storage }));

  setupPassport(authConfig);

  // LocalStrategy.init(passport, authConfig.User);

  // setup passport on every route call
  authConfig.app.use(authConfig.passport.initialize());
  // passport.session has to be used after 
  // express.session in order to work properly.
  // allow passport to use "express-session"
  authConfig.app.use(authConfig.passport.session());
  // passport function that calls the strategy to be executed
  authConfig.app.use(authConfig.passport.authenticate('session'));
};

/**
 * The Authentication manager
 */
import { AuthMngrOptions } from "./mngr";
import { setupAuthController } from "./mngr/controller";
import { setupAuthRouter } from "./mngr/router";

export { AuthMngrOptions };

export const initAuthMngr = (options: AuthMngrOptions) => {

  options.passport.use('local-login', options.strategies[0]);

  const controller = setupAuthController(options);

  return setupAuthRouter(options, controller);
};
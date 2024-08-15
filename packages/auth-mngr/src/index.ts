/**
 * The Authentication manager
 */
import { 
  AuthMngrOptions,
  AuthMngrOptionsCommon,
  AuthStrategyDef,
  AuthMngrControllerOptions, 
  AuthMngrRouterOptions
} from "./mngr";

import { setupAuthStrategyService } from "./mngr/service";
import { setupAuthCommonController, setupAuthStrategyController } from "./mngr/controller";
import { setupAuthCommonRouter, setupAuthStrategyRouter } from "./mngr/router";

export { AuthMngrOptions, AuthMngrOptionsCommon ,AuthStrategyDef };

export const initAuthMngr = (options: AuthMngrOptions) => {
  const strategiesDef = options.strategiesDef;
  const logger = options.common.logger;

  strategiesDef.forEach((strategyDef)=> {
    logger?.debug(`Strategy name - ${strategyDef.strategy.name} - ${__filename}`);
    // register strategy
    strategyDef.passport.use(strategyDef.strategy.name, strategyDef.strategy);

    const service = setupAuthStrategyService(options.common);

    const controllerOptions: AuthMngrControllerOptions = {
      strategyDef: strategyDef,
      common: options.common,
      service: service,
    };
    const controller = setupAuthStrategyController(controllerOptions, service);

    const routerOptions: AuthMngrRouterOptions = {
      strategyDef: strategyDef,
      common: options.common,
      controller: controller,
      validation: strategyDef.validation,
    };
    setupAuthStrategyRouter(routerOptions);
  });
  
  const controller = setupAuthCommonController();

  const routerOptions: AuthMngrRouterOptions = {
    strategyDef: null,
    common: options.common,
    controller: controller,
  };
  setupAuthCommonRouter(routerOptions);
  
  return options.common.router;
};
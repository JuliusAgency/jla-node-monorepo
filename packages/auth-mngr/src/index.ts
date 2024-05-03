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
import { setupAuthStrategyController } from "./mngr/controller";
import { setupAuthStrategyRouter } from "./mngr/router";

export { AuthMngrOptions, AuthMngrOptionsCommon ,AuthStrategyDef };

// const route = [
//   {method: "get", route: "/viewitem", validation: [], action: viewItem},
//   {method: "get", route: "/list"}, validation: [], action: list},
//   {method: "post", route: "/newitem", validation: [checkData], action: createNewItem}
// ];


export const initAuthMngr = (options: AuthMngrOptions) => {
  const strategiesDef = options.strategiesDef;
  const logger = options.common.logger;

  strategiesDef.forEach((strategyDef)=> {
    logger.debug(`Strategy name - ${strategyDef.strategy.name}`);
    // register strategy
    strategyDef.passport.use(strategyDef.strategy.name, strategyDef.strategy);

    const service = setupAuthStrategyService(options.common);

    const controllerOptions: AuthMngrControllerOptions = {
      strategyDef: strategyDef,
      common: options.common,
      service: service,
    };
    const controller = setupAuthStrategyController(controllerOptions);

    const routerOptions: AuthMngrRouterOptions = {
      strategyDef: strategyDef,
      common: options.common,
      controller: controller,
    };
    setupAuthStrategyRouter(routerOptions);
  });
  // const controller = setupAuthCommonController();
  // setupAuthCommonRouter(options.common, controller);
  
  return options.common.router;
};
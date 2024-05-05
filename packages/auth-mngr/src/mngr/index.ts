/* eslint-disable @typescript-eslint/no-explicit-any */
export type AuthStrategyDef = {
  passport: any;
  strategy: any;
  validation?: any;
};

export type AuthMngrOptionsCommon = {
  router: any;
  User: any;
  utils: any;
  session: boolean;
  encode: any;
  logger?: any;
};

export type AuthMngrOptions = {
  strategiesDef: Array<AuthStrategyDef>;
  common: AuthMngrOptionsCommon;
};

export type AuthMngrRouterOptions = {
  strategyDef: AuthStrategyDef;
  common: AuthMngrOptionsCommon;
  controller: any;
  validation?: any;
};
export type AuthMngrControllerOptions = {
  strategyDef: AuthStrategyDef;
  common: AuthMngrOptionsCommon;
  service: any;
};
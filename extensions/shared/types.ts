export type AuthOptions = {
  app: any;
  passport: any;
  config: any;
  db: any;
  logger: any;
  emailer?: any;
  user: any;
};
  
export type AuthOptionsShared = AuthOptions & { token: any};
  
export type StrategiesPathOptions = {
  router: any;
  strategies: object;
  strategyPath?: string;
  strategiesConfig: object;
};
  
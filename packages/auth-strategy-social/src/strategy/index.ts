/* eslint-disable @typescript-eslint/no-explicit-any */
export { initStrategy } from './social';

export type StrategyOptions = {
  verify: any;
  strategy: any;
  clientId: string;
  clientSecret: string;
  callbackUrl: string;
  logger: any;
};

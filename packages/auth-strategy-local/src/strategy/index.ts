/* eslint-disable @typescript-eslint/no-explicit-any */
export { initStrategy } from './local';

export type StrategyOptions = {
  verify: any;
  strategy: any;
  loginFieldName: string;
  logger?: any;
};

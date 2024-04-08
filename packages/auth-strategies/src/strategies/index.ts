import { LocalStrategy } from './local';

export type StrategyOptions = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dBApi: any;
  salt: number;
};

export const initStrategies = (options: StrategyOptions) => {
  LocalStrategy.init(options);
  return LocalStrategy;
};

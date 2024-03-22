import { LocalStrategy } from './local';

export type StrategyOptions = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dBApi: any;
};

export const initStrategies = (options: StrategyOptions) => {
  const { dBApi } = options;
  LocalStrategy.init(dBApi);
  return LocalStrategy;
};

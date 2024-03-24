import { LocalStrategy } from './local';
export type StrategyOptions = {
    dBApi: any;
};
export declare const initStrategies: (options: StrategyOptions) => typeof LocalStrategy;

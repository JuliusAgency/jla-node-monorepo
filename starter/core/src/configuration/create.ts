import { AppConfig } from './types';

// all the AppConfig keys that would have a fallback value.
type KeysWithFallbackValue = 'mocksEnabled';

//  a generic custom utility that will make a few required properties in an object, required.
type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

// the AppConfig that the user MUST pass
type RequiredConfig = Optional<AppConfig, KeysWithFallbackValue>;

//  all AppConfig values to fallback
const defaultConfig: Pick<AppConfig, KeysWithFallbackValue> = {
  mocksEnabled: false,
};

// return a new object that composes from the default config and
// overrides everything with whatever it's passed into the config
export function createConfig(config: RequiredConfig): AppConfig {
  return {
    ...defaultConfig,
    ...config,
  };
}

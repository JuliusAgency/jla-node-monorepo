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

export type ExternalConfig = {[key: string]: string};

// return a new object that composes from the default config and
// overrides everything with whatever it's passed into the config
export const createConfig = (config: RequiredConfig, externalConfig?: ExternalConfig): AppConfig => {
  resolveExternalConfig(externalConfig);
  return {
    ...defaultConfig,
    ...config,
    ...externalConfig
  };
};

export const resolveExternalConfig = (externalConfig?: ExternalConfig) => {
  if (externalConfig === undefined) return;
  Object.entries(externalConfig)
    .forEach(([key, value]) => externalConfig[key] = process.env[value] || '');
};

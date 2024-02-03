import {
  ModelType,
  rulesRepository,
  initRules,
} from '@juliusagency/authorization-repo-mongo';
import { setupAuthorization } from '@juliusagency/authorization-jwt-checker';

export { initRules, ModelType };

export type AuthorizationJwtSetSetupOptions = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  connection: any,
  type: ModelType,
  secret: string,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setupAuthorizationSet = (config: AuthorizationJwtSetSetupOptions) => {
  const rulesRepo = rulesRepository(config.connection, config.type);
  // // Init the authorization package
  return setupAuthorization({ rulesRepo }, config);
};

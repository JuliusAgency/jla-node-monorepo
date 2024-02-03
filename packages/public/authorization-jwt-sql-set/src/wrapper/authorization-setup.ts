/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ModelType,
  rulesModel,
  initRules,
  rulesRepository,
} from '@juliusagency/authorization-repo-sql';
import { setupAuthorization } from '@juliusagency/authorization-jwt-checker';

export { initRules, ModelType, rulesModel };

export type AuthorizationJwtSetSetupOptions = {
  repository: any;
  type: any;
  secret: string;
};

export const setupAuthorizationSet = (config: AuthorizationJwtSetSetupOptions) => {
  const sqlRepository = config.repository;
  const rulesRepo = rulesRepository({ sqlRepository }, config.type);


  // // Init the authorization package
  return setupAuthorization({ rulesRepo }, config);
};

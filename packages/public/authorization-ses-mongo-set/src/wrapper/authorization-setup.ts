import {
  ModelType,
  rulesRepository,
  initRules,
} from '@juliusagency/authorization-repo-mongo';
import { setupAuthorization } from '@juliusagency/authorization-ses-checker';

export { initRules, ModelType };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setupAuthorizationSet = (connection: any, type: ModelType) => {
  const rulesRepo = rulesRepository(connection, type);
  // // Init the authorization package
  return setupAuthorization({ rulesRepo });
};

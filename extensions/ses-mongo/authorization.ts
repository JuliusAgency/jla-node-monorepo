import { setupAuthorization as authorization} from '../../packages/authorization-ses-checker/src';
import { ModelType, initRules, rulesRepository } from '../../packages/authorization-repo-mongo/src';

import { aclData, rbacData } from './authorization-definitions';

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
export const rulesEntity = (_config: any) => {
  return null;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setupAuthorization = async ({ config, db }) => {
  const connection = await db.connectDb();
  const modelType = config.modelType === 'ACL' ? ModelType.ACL : ModelType.RBAC;
  if (config.test) {
    const rules = modelType === ModelType.ACL ? aclData : rbacData;

    await initRules(connection, modelType, rules);
    console.log(`authorization rules for ${config.modelType} created`);
  }

  const rulesRepo = rulesRepository(connection, modelType);
  // // Init the authorization package
  return authorization({ rulesRepo });
};

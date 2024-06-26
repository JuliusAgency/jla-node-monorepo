import { setupAuthorization as authorization} from '../../packages/authorization-jwt-checker/src';
import { ModelType, rulesModel, initRules, rulesRepository } from '../../packages/authorization-repo-sql/src';

import { aclData, rbacData } from '../dbs/sql/authorization-definitions';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const rulesEntity = (config: any) => {
  const modelType = config.modelType === 'ACL' ? ModelType.ACL : ModelType.RBAC;
  return rulesModel(modelType);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setupAuthorization = async ({ config, db }) => {
  const modelType = config.modelType === 'ACL' ? ModelType.ACL : ModelType.RBAC;
  if (config.test) {
    const rules = modelType === ModelType.ACL ? aclData : rbacData;
    await initRules(db, modelType, rules);
    console.log(`authorization rules for ${config.modelType} created`);
  }

  const rulesRepo = rulesRepository(db, modelType);
  // // Init the authorization package
  const aConf = {
    secret: config.secretKey
  };
  return authorization({ rulesRepo }, aConf);
};

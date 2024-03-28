import { setupAuthorization as authorization} from '../../packages/authorization-ses-checker/src';
import { ModelType, rulesModel, initRules, rulesRepository } from '../../packages/authorization-repo-sql/src';

import { aclData } from '../../pack-tester/src/dbs/authorization-definitions/acl';
import { rbacData } from '../../pack-tester/src/dbs/authorization-definitions/rbac';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const rulesEntity = (config: any) => {
  const modelType = config.modelType === 'ACL' ? ModelType.ACL : ModelType.RBAC;
  return rulesModel(modelType);
};

export { ModelType, rulesModel };
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setupAuthorization = ({ config, db }) => {
  const modelType = config.modelType === 'ACL' ? ModelType.ACL : ModelType.RBAC;
  if (config.test) {
    const rules = modelType === ModelType.ACL ? aclData : rbacData;
    initRules(db, modelType, rules);
    console.log(`authorization rules for ${config.modelType} created`);
  }

  const rulesRepo = rulesRepository(db, modelType);
  // // Init the authorization package
  return authorization({ rulesRepo });
};

import {
  // ModelType,
  // initRules,
  rulesRepository,
} from '../../../../packages/authorization-repo-sql';
import { setupAuthorization } from '../../../../packages/authorization-ses-checker';

// import { aclData } from '../../dbs/authorization-definitions/acl';
// import { rbacData } from '../../dbs/authorization-definitions/rbac';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setupAuthorizationSet = ({ config, db }) => {
  const modelType = config.modelType;
  // const rules = modelType === ModelType.ACL ? aclData : rbacData;
  if (config.test) {
    // initRules(db, modelType, rules);
  }

  const rulesRepo = rulesRepository(db, modelType);
  // // Init the authorization package
  return setupAuthorization({ rulesRepo });
};


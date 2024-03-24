import { initRules, ModelType } from '../../../packages/public/authorization-ses-sql-set';

import { aclData } from './acl';
import { rbacData } from './rbac';

export { ModelType };
export const populateRules = ({ sqlRepository }, type: ModelType) => {
  const rules = type === ModelType.ACL ? aclData : rbacData;
  initRules({ sqlRepository }, type, rules);
};

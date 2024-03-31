import { ModelType, rulesModel } from './model';
import { rulesDataSource } from './rules-data-source';
import { initRules } from './init-rules';

export { ModelType, rulesModel };
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const rulesRepository = (db: any, type: ModelType) => {
  return rulesDataSource(db, type);
};
export { initRules };

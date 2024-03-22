import { ModelType } from './model';
import { rulesDataSource } from './rules-data-source';
import { initRules } from './init-rules';

export { ModelType };
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const rulesRepository = (connection: any, type: any) => {
  return rulesDataSource(connection, type);
};
export { initRules };
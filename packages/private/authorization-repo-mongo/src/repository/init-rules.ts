/**
 * Load authorization rules from a definition,
 * when a rules management is not implemented.
 * Runs the initRules once only for each (ACl, RBAC) type.
 */

import { rulesModel } from './model';

/**
 * Load a authorization definitions into a Db
 * @param type
 * @param data
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const initRules = async (connection: any, type: any, data: unknown) => {
  const model = rulesModel(connection, type);
  const newRules = new model(data);
  await newRules.save();
};

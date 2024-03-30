import { rulesModel } from './model';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const rulesDataSource = (connection: any, type: any) => {
  const getRules = async () => {
    const rulesCollection = rulesModel(connection, type);
    const rules = await rulesCollection.find({});
    if (rules === undefined) return rules;
    return rules[0].rules;
  };

  return { getRules };
};

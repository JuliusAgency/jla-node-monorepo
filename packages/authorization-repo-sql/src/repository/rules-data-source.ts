/* eslint-disable @typescript-eslint/no-unused-vars */
import { ModelType, rulesModel } from './model';

export { rulesModel };
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const rulesDataSource = (db: any, type: ModelType) => {
  const getRules = async () => {
    const rulesCollection = rulesModel(type);
    const repository = await db(rulesCollection);
    return await repository.find({ where: {} });
  };

  return { getRules };
};

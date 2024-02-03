/* eslint-disable @typescript-eslint/no-unused-vars */
import { ModelType, rulesModel } from './model';

export { rulesModel };
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const rulesDataSource = ({ sqlRepository }, type: ModelType) => {
  const getRules = async () => {
    const rulesCollection = rulesModel(type);
    const db = await sqlRepository(rulesCollection);
    return await db.find({ where: {} });
  };

  return { getRules };
};

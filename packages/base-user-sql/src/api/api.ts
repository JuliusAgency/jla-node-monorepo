/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 *
 * @param Entity Wrapper for native Db API
 * @returns
 */

export const dBApi = (Entity: any) => {
  const findOne = async (options: any) => {
    const pkn = getPrimaryKeyName();
    if ('_id' in options || 'id' in options) {
      options = { [pkn]: options[pkn] };
    }
    return await Entity.findOne({ where: options });
  };

  const deleteOne = async (row: any) => {
    return await Entity.remove(row);
  };

  const save = async (userObj: any) => {
    return await Entity.save(userObj);
  };

  const findById = async (options: any) => {
    const pkn = getPrimaryKeyName();
    return await Entity.findOne({ where: { [pkn]: options[pkn] } });
  };

  const findOneAndUpdate = async (filter: any, update: any) => {
    const pkn = getPrimaryKeyName();
    if ('_id' in filter || 'id' in filter) {
      filter = { [pkn]: filter[pkn] };
    }
    const user = await Entity.findOne({ where: filter });
    await Entity.update({ [pkn]: user[pkn] }, update);
  };

  const getPrimaryKeyName = () => {
    return Entity.metadata.primaryColumns[0].databaseName;
  };

  return {
    findById,
    findOne,
    findOneAndUpdate,
    deleteOne,
    save,
    getPrimaryKeyName,
  };
};

"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 *
 * @param Entity Wrapper for native Db API
 * @returns
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.dBApi = void 0;
const dBApi = (Entity) => {
    const findOne = async (options) => {
        const pkn = getPrimaryKeyName();
        if ('_id' in options || 'id' in options) {
            options = { [pkn]: options[pkn] };
        }
        return await Entity.findOne({ where: options });
    };
    const deleteOne = async (row) => {
        return await Entity.remove(row);
    };
    const save = async (userObj) => {
        return await Entity.save(userObj);
    };
    const findById = async (options) => {
        const pkn = getPrimaryKeyName();
        return await Entity.findOne({ where: { [pkn]: options[pkn] } });
    };
    const findOneAndUpdate = async (filter, update) => {
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
exports.dBApi = dBApi;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx1REFBdUQ7QUFDdkQ7Ozs7R0FJRzs7O0FBRUksTUFBTSxLQUFLLEdBQUcsQ0FBQyxNQUFXLEVBQUUsRUFBRTtJQUNuQyxNQUFNLE9BQU8sR0FBRyxLQUFLLEVBQUUsT0FBWSxFQUFFLEVBQUU7UUFDckMsTUFBTSxHQUFHLEdBQUcsaUJBQWlCLEVBQUUsQ0FBQztRQUNoQyxJQUFJLEtBQUssSUFBSSxPQUFPLElBQUksSUFBSSxJQUFJLE9BQU8sRUFBRSxDQUFDO1lBQ3hDLE9BQU8sR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7UUFDcEMsQ0FBQztRQUNELE9BQU8sTUFBTSxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDbEQsQ0FBQyxDQUFDO0lBRUYsTUFBTSxTQUFTLEdBQUcsS0FBSyxFQUFFLEdBQVEsRUFBRSxFQUFFO1FBQ25DLE9BQU8sTUFBTSxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2xDLENBQUMsQ0FBQztJQUVGLE1BQU0sSUFBSSxHQUFHLEtBQUssRUFBRSxPQUFZLEVBQUUsRUFBRTtRQUNsQyxPQUFPLE1BQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNwQyxDQUFDLENBQUM7SUFFRixNQUFNLFFBQVEsR0FBRyxLQUFLLEVBQUUsT0FBWSxFQUFFLEVBQUU7UUFDdEMsTUFBTSxHQUFHLEdBQUcsaUJBQWlCLEVBQUUsQ0FBQztRQUNoQyxPQUFPLE1BQU0sTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2xFLENBQUMsQ0FBQztJQUVGLE1BQU0sZ0JBQWdCLEdBQUcsS0FBSyxFQUFFLE1BQVcsRUFBRSxNQUFXLEVBQUUsRUFBRTtRQUMxRCxNQUFNLEdBQUcsR0FBRyxpQkFBaUIsRUFBRSxDQUFDO1FBQ2hDLElBQUksS0FBSyxJQUFJLE1BQU0sSUFBSSxJQUFJLElBQUksTUFBTSxFQUFFLENBQUM7WUFDdEMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztRQUNsQyxDQUFDO1FBQ0QsTUFBTSxJQUFJLEdBQUcsTUFBTSxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDckQsTUFBTSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNwRCxDQUFDLENBQUM7SUFFRixNQUFNLGlCQUFpQixHQUFHLEdBQUcsRUFBRTtRQUM3QixPQUFPLE1BQU0sQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQztJQUN4RCxDQUFDLENBQUM7SUFFRixPQUFPO1FBQ0wsUUFBUTtRQUNSLE9BQU87UUFDUCxnQkFBZ0I7UUFDaEIsU0FBUztRQUNULElBQUk7UUFDSixpQkFBaUI7S0FDbEIsQ0FBQztBQUNKLENBQUMsQ0FBQztBQTNDVyxRQUFBLEtBQUssU0EyQ2hCIn0=
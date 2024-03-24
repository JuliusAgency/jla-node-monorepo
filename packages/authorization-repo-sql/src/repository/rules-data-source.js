"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rulesDataSource = exports.rulesModel = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
const model_1 = require("./model");
Object.defineProperty(exports, "rulesModel", { enumerable: true, get: function () { return model_1.rulesModel; } });
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const rulesDataSource = (db, type) => {
    const getRules = async () => {
        const rulesCollection = (0, model_1.rulesModel)(type);
        const repository = await db.sqlRepository(rulesCollection);
        return await repository.find({ where: {} });
    };
    return { getRules };
};
exports.rulesDataSource = rulesDataSource;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVsZXMtZGF0YS1zb3VyY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJydWxlcy1kYXRhLXNvdXJjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzREFBc0Q7QUFDdEQsbUNBQWdEO0FBRXZDLDJGQUZXLGtCQUFVLE9BRVg7QUFDbkIsOERBQThEO0FBQ3ZELE1BQU0sZUFBZSxHQUFHLENBQUMsRUFBTyxFQUFFLElBQWUsRUFBRSxFQUFFO0lBQzFELE1BQU0sUUFBUSxHQUFHLEtBQUssSUFBSSxFQUFFO1FBQzFCLE1BQU0sZUFBZSxHQUFHLElBQUEsa0JBQVUsRUFBQyxJQUFJLENBQUMsQ0FBQztRQUN6QyxNQUFNLFVBQVUsR0FBRyxNQUFNLEVBQUUsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDM0QsT0FBTyxNQUFNLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM5QyxDQUFDLENBQUM7SUFFRixPQUFPLEVBQUUsUUFBUSxFQUFFLENBQUM7QUFDdEIsQ0FBQyxDQUFDO0FBUlcsUUFBQSxlQUFlLG1CQVExQiJ9
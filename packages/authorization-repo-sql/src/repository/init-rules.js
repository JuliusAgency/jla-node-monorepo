"use strict";
/**
 * Load authorization rules from a definition,
 * when a rules management is not implemented.
 * Runs the initRules once only for each (ACl, RBAC) type.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.initRules = void 0;
const model_1 = require("./model");
/**
 * Load a authorization definitions into a Db
 * @param type
 * @param data
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const initRules = async (
// eslint-disable-next-line @typescript-eslint/no-unused-vars
{ sqlRepository }, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type, data) => {
    const model = (0, model_1.rulesModel)(type);
    await sqlRepository(model).save(data);
};
exports.initRules = initRules;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC1ydWxlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluaXQtcnVsZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7O0dBSUc7OztBQUVILG1DQUFnRDtBQUVoRDs7OztHQUlHO0FBQ0gsOERBQThEO0FBQ3ZELE1BQU0sU0FBUyxHQUFHLEtBQUs7QUFDNUIsNkRBQTZEO0FBQzdELEVBQUUsYUFBYSxFQUFFO0FBQ2pCLDhEQUE4RDtBQUM5RCxJQUFlLEVBQ2YsSUFBYSxFQUNiLEVBQUU7SUFDRixNQUFNLEtBQUssR0FBRyxJQUFBLGtCQUFVLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsTUFBTSxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3hDLENBQUMsQ0FBQztBQVRXLFFBQUEsU0FBUyxhQVNwQiJ9
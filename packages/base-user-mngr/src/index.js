"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupAuthManager = void 0;
/**
 * Base User manager package.
 * Performs base user's operations:
 *  - Register,
 *  - Login,
 *  - Change password,
 */
const controller_1 = require("./manager/controller");
const router_1 = require("./manager/router");
const service_1 = require("./manager/service");
const setupAuthManager = (options) => {
    const service = (0, service_1.setupAuthService)(options);
    const controller = (0, controller_1.setupAuthController)(options, service);
    return (0, router_1.setupAuthRouter)(controller);
};
exports.setupAuthManager = setupAuthManager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTs7Ozs7O0dBTUc7QUFDSCxxREFBMkQ7QUFDM0QsNkNBQW1EO0FBQ25ELCtDQUFxRDtBQUs5QyxNQUFNLGdCQUFnQixHQUFHLENBQUMsT0FBd0IsRUFBRSxFQUFFO0lBQzNELE1BQU0sT0FBTyxHQUFHLElBQUEsMEJBQWdCLEVBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUMsTUFBTSxVQUFVLEdBQUcsSUFBQSxnQ0FBbUIsRUFBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFFekQsT0FBTyxJQUFBLHdCQUFlLEVBQUMsVUFBVSxDQUFDLENBQUM7QUFDckMsQ0FBQyxDQUFDO0FBTFcsUUFBQSxnQkFBZ0Isb0JBSzNCIn0=
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupAuthorization = void 0;
const service_1 = require("./service");
const setupAuthorization = ({ rulesRepo }) => {
    const isAuthorized = (permission, resource) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return async (req, res, next) => {
            if (req.session.passport && req.session.passport.user.role) {
                if (await permitted(req.session.passport.user.role, permission, resource)) {
                    return next();
                }
            }
            res.sendStatus(403);
        };
    };
    const permitted = async (role, permission, resource) => {
        const permissions = await (0, service_1.getPermissions)({ rulesRepo })(role, resource);
        return permissions[permission];
    };
    return isAuthorized;
};
exports.setupAuthorization = setupAuthorization;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1pZGRsZXdhcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsdUNBQTJDO0FBRXBDLE1BQU0sa0JBQWtCLEdBQUcsQ0FBQyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDbEQsTUFBTSxZQUFZLEdBQUcsQ0FBQyxVQUFrQixFQUFFLFFBQWlCLEVBQUUsRUFBRTtRQUM3RCw4REFBOEQ7UUFDOUQsT0FBTyxLQUFLLEVBQUUsR0FBUSxFQUFFLEdBQWEsRUFBRSxJQUFrQixFQUFFLEVBQUU7WUFDM0QsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLFFBQVEsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQzNELElBQUksTUFBTSxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBQztvQkFDMUUsT0FBTyxJQUFJLEVBQUUsQ0FBQztnQkFDaEIsQ0FBQztZQUNILENBQUM7WUFDRCxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQztJQUVGLE1BQU0sU0FBUyxHQUFHLEtBQUssRUFDckIsSUFBWSxFQUNaLFVBQWtCLEVBQ2xCLFFBQWlCLEVBQ2pCLEVBQUU7UUFDRixNQUFNLFdBQVcsR0FBRyxNQUFNLElBQUEsd0JBQWMsRUFBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBYSxDQUFDO1FBQ3BGLE9BQU8sV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2pDLENBQUMsQ0FBQztJQUNGLE9BQU8sWUFBWSxDQUFDO0FBQ3RCLENBQUMsQ0FBQztBQXRCVyxRQUFBLGtCQUFrQixzQkFzQjdCIn0=
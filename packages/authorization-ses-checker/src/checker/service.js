"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPermissions = void 0;
const getPermissions = ({ rulesRepo }) => {
    const getRolePermissions = (role, resource) => {
        return permissionService({ rulesRepo }).getRolePermissions(role, resource);
    };
    return getRolePermissions;
};
exports.getPermissions = getPermissions;
const permissionService = ({ rulesRepo }) => {
    const getRolePermissions = async (role, resource) => {
        const definition = await rulesRepo.getRules();
        if (resource) {
            // ACL
            const rules = definition;
            if (rules === undefined) {
                return returnPermissions([false, false, false, false]);
            }
            ;
            const all = rules.filter((r) => r.role === role);
            const permissions = all.find((r) => r.resource === resource).permission;
            return returnPermissions(permissions);
        }
        // RBAC
        const rules = definition;
        const permissions = rules.find((r) => r.role === role).permission;
        if (permissions === undefined) {
            return returnPermissions([false, false, false, false]);
        }
        return returnPermissions(permissions);
    };
    const returnPermissions = (permissions) => {
        const permDict = {};
        permDict['create'] = permissions[0];
        permDict['read'] = permissions[1];
        permDict['update'] = permissions[2];
        permDict['delete'] = permissions[3];
        return permDict;
    };
    return { getRolePermissions };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQU8sTUFBTSxjQUFjLEdBQUcsQ0FBQyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDOUMsTUFBTSxrQkFBa0IsR0FBRyxDQUFDLElBQVksRUFBRSxRQUFpQixFQUFFLEVBQUU7UUFDN0QsT0FBTyxpQkFBaUIsQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzdFLENBQUMsQ0FBQztJQUNGLE9BQU8sa0JBQWtCLENBQUM7QUFDNUIsQ0FBQyxDQUFDO0FBTFcsUUFBQSxjQUFjLGtCQUt6QjtBQUVGLE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxFQUFFLFNBQVMsRUFBRSxFQUFrRixFQUFFO0lBQzFILE1BQU0sa0JBQWtCLEdBQUcsS0FBSyxFQUFFLElBQVksRUFBRSxRQUFpQixFQUFFLEVBQUU7UUFDbkUsTUFBTSxVQUFVLEdBQUcsTUFBTSxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDOUMsSUFBSSxRQUFRLEVBQUUsQ0FBQztZQUNiLE1BQU07WUFDTixNQUFNLEtBQUssR0FBRyxVQUFVLENBQUM7WUFDekIsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFLENBQUM7Z0JBQ3hCLE9BQU8saUJBQWlCLENBQUMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3pELENBQUM7WUFBQSxDQUFDO1lBQ0YsTUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQW9CLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUM7WUFDcEUsTUFBTSxXQUFXLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQXdCLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDO1lBQy9GLE9BQU8saUJBQWlCLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDeEMsQ0FBQztRQUNELE9BQU87UUFDUCxNQUFNLEtBQUssR0FBRyxVQUFVLENBQUM7UUFDekIsTUFBTSxXQUFXLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQW9CLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDO1FBQ3JGLElBQUksV0FBVyxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQzlCLE9BQU8saUJBQWlCLENBQUMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3pELENBQUM7UUFDRCxPQUFPLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3hDLENBQUMsQ0FBQztJQUVGLE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxXQUFzQixFQUFFLEVBQUU7UUFDbkQsTUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEMsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQyxDQUFDO0lBRUYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLENBQUM7QUFDaEMsQ0FBQyxDQUFDIn0=
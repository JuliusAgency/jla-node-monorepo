export const getPermissions = ({ rulesRepo }) => {
  const getRolePermissions = (role: string, resource?: string) => {
    return permissionService({ rulesRepo }).getRolePermissions(role, resource);
  };
  return getRolePermissions;
};

const permissionService = ({ rulesRepo }): { getRolePermissions: (role: string, resource?: string) => Promise<unknown>; } => {
  const getRolePermissions = async (role: string, resource?: string) => {
    const definition = await rulesRepo.getRules();
    if (resource) {
      // ACL
      const rules = definition;
      if (rules === undefined) {
        return returnPermissions([false, false, false, false]);
      };
      const all = rules.filter((r: { role: string; }) => r.role === role);
      const permissions = all.find((r: { resource: string; }) => r.resource === resource).permission;
      return returnPermissions(permissions);
    }
    // RBAC
    const rules = definition;
    const permissions = rules.find((r: { role: string; }) => r.role === role).permission;
    if (permissions === undefined) {
      return returnPermissions([false, false, false, false]);
    }
    return returnPermissions(permissions);
  };

  const returnPermissions = (permissions: boolean[]) => {
    const permDict = {};
    permDict['create'] = permissions[0];
    permDict['read'] = permissions[1];
    permDict['update'] = permissions[2];
    permDict['delete'] = permissions[3];
    return permDict;
  };

  return { getRolePermissions };
};

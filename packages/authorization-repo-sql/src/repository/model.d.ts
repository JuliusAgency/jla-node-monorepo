export declare enum ModelType {
    ACL = 0,
    RBAC = 1
}
export declare class Rbac {
  _id: number;
  role: string;
  permission: boolean[];
}
export declare class Acl {
  _id: number;
  role: string;
  resource: string;
  permission: boolean[];
}
export declare const rulesModel: (type: ModelType) => typeof Rbac;

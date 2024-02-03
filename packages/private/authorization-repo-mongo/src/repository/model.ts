/* eslint-disable @typescript-eslint/no-explicit-any */
import { Schema, Model } from 'mongoose';

export enum ModelType {
  ACL = 0,
  RBAC = 1,
}

const RoleSchemaRbac = new Schema(
  {
    role: String,
    permission: Array<boolean>,
  },
  { _id: false },
);

const RbacSchema = new Schema({
  rules: [RoleSchemaRbac],
});

const RoleSchemaAcl = new Schema(
  {
    role: String,
    resource: String,
    permission: Array<boolean>,
  },
  { _id: false },
);

const AclSchema = new Schema({
  rules: [RoleSchemaAcl],
});

let Acl: any;
let Rbac: any;

export const rulesModel = (
  connection: any,
  type: ModelType = ModelType.ACL,
): typeof Model<unknown> => {
  if (Acl === undefined && Rbac === undefined) {
    Acl = connection.model('Acl', AclSchema);
    Rbac = connection.model('Rbac', RbacSchema);
  };
  return type === ModelType.ACL ? Acl : Rbac;
};

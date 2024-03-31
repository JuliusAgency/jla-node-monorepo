/* eslint-disable indent */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum ModelType {
  ACL = 0,
  RBAC = 1,
}

@Entity('rbacs')
export class Rbac {
  @PrimaryGeneratedColumn('uuid')
  _id: number;
  @Column({ type: 'varchar', default: 'guest' })
  role: string;
  @Column({ type: 'boolean', array: true, default: [false, false, false, false] })
  permission: boolean[];
}

@Entity('acls')
export class Acl {
  @PrimaryGeneratedColumn('uuid')
  _id: number;
  @Column({ type: 'varchar', default: 'guest' })
  role: string;
  @Column({ type: 'varchar', default: '' })
  resource: string;
  @Column({ type: 'boolean', array: true, default: [false, false, false, false] })
  permission: boolean[];
}


export const rulesModel = (type: ModelType) => {
  if (type === ModelType.RBAC) return Rbac;
  return Acl;
};

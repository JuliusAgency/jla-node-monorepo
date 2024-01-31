/**
 * Base user definition
 */

/* eslint-disable indent */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class BaseUser {
  @PrimaryGeneratedColumn('uuid')
  _id: number;
  @Column({ name: 'name', type: 'varchar', nullable: false })
  name: string;
  @Column({ name: 'email', type: 'varchar', nullable: false })
  email: string;
  @Column({ name: 'password', type: 'varchar', nullable: false })
  password: string;
  @Column()
  createdAt: Date;
}

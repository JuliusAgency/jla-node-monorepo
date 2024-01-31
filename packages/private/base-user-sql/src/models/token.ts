/**
 * Password recovery token definition
 */

/* eslint-disable indent */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tokens')
export class Token {
  @PrimaryGeneratedColumn('uuid')
  id: number;
  @Column()
  token: string;
  @Column({ name: 'expiresSec', type: 'int', default: '300' })
  expiresSec: number;
  @Column()
  createdAt: Date;
  @Column()
  user: string;
}

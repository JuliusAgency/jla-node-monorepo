import { Schema } from 'mongoose';

import { BaseUser } from '../../../../packages/base-user-mongo/src';

export interface UserInterface {
  role: string;
  phone?: string;
}

const UserSchema = new Schema<UserInterface>(
  {
    role: {
      type: String,
      required: true,
      default: 'guest',
    },
    phone: {
      type: String,
      required: false,
    },
  },
  { collection: 'users' },
);

export const User = BaseUser.discriminator('user', UserSchema);
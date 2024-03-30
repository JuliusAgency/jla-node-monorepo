import { Request, Response } from 'express';

import { AppError, AppErrorArgs, ResponseCode } from '../../../../../packages/simple-error-handler/src';

import { User } from './model';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setupUserController = ({ repository }) => {
  console.log(repository);
  const getAllUsers = async (_req: Request, res: Response) => {
    const users = await repository(User).find({ where: {} });
    if (!users) {
      const errorArgs: AppErrorArgs = {
        name: 'getAllUsers',
        code: ResponseCode.OK,
        description: 'There are no users',
      };
      throw new AppError(errorArgs);
    }
    return res.status(200).json(users);
  };
  const getUserById = async (req: Request, res: Response) => {
    const { userId } = req.params;
    const user = await getUserData(userId);
    if (!user) {
      const errorArgs: AppErrorArgs = {
        name: 'getUserById',
        code: ResponseCode.OK,
        description: 'The user not found',
      };
      throw new AppError(errorArgs);
    }
    return res.status(200).json(user);
  };
  const getUserData = async (userId: string) => {
    return await repository(User).findOne({ where: { _id: userId } });
  };
  return {
    getAllUsers,
    getUserById,
  };
};

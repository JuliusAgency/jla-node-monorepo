import { Request, Response } from 'express';

import { AppError, AppErrorArgs, ResponseCode } from '../../../common/error-handler';

import { User } from './model';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setupUserController = (logger: any) => {
  logger.debug(`setupUserController - ${__filename}`);

  const getAllUsers = async (_req: Request, res: Response) => {
    logger.debug(`getAllUsers - ${__filename}`);
    const users = await User.find({});
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
    logger.debug(`getUserById - ${userId} - ${__filename}`);
    const user = await getUserData(userId);
    if (!user) {
      const errorArgs: AppErrorArgs = {
        name: 'getUserById',
        code: ResponseCode.OK,
        description: 'There are no users',
      };
      throw new AppError(errorArgs);
    }
    return res.status(200).json(user);
  };
  const getUserData = async (userId: string) => {
    return await User.findById(userId);
  };

  return {
    getAllUsers,
    getUserById,
  };
};

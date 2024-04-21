/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';

import { UserMngrOPtions } from './types';

export const setupUserMngrController = (options: UserMngrOPtions, service: any) => {

  const register = async (req: Request, res: Response) => {
    const newUser = req.body;
    try {
      const user = await service.register('email',newUser);
      return res.send(user);
    } catch (error: Error | any) {
      return res.status(500).json({ message: error.message });
    }
  };

  const changePassword = async (req: Request, res: Response) => {
    const { email, password, passwordNew } = req.body;
    try {
      const emailParams = await service.changePassword(
        email,
        password,
        passwordNew,
      );
      return res.status(200).send({ params: emailParams, success: true });
    } catch (error: Error | any) {
      return res.status(500).json({ message: error.message });
    }
  };

  const resetPasswordRequest = async (req: Request, res: Response) => {
    const { email } = req.body;
    try {
      const emailParams = await service.resetPasswordRequest(email);
      await sendEmail('resetPasswordRequest', emailParams);
      return res.status(200).send({ params: emailParams, success: true });
    } catch (error: Error | any) {
      return res.status(500).json({ message: error.message });
    }
  };

  const resetPassword = async (req: Request, res: Response) => {
    const { user, token, password } = req.body;
    try {
      const emailParams = await service.resetPassword(user, token, password);
      await sendEmail('resetPassword', emailParams);
      return res.status(200).send({ params: emailParams, success: true });
    } catch (error: Error | any) {
      return res.status(500).json({ message: error.message });
    }
  };

  const sendEmail = async (name: string, params: any): Promise<void> => {
    const { emailer } = options;
    if (emailer != undefined) {
      const emailOptions = emailer.buildEmail(name, params);
      await emailer.sendEmail(emailOptions);
    }
  };

  return {
    register,
    changePassword,
    resetPasswordRequest,
    resetPassword,
  };
};

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';

import { UserMngrOPtions } from './types';

export const setupUserMngrController = (options: UserMngrOPtions, service: any) => {
  const logger = options.logger;

  logger?.debug(`setupUserMngrController ${__filename}`);


  const register = async (req: Request, res: Response) => { 
    const newUser = req.body;
    logger?.debug(`register new user ${newUser} in ${__filename}`);

    try {
      const user = await service.register('email',newUser);
      return res.send(user);
    } catch (error: Error | any) {
      return res.status(500).json({ message: error.message });
    }
  };

  const changePassword = async (req: Request, res: Response) => {
    const { email, password, passwordNew } = req.body;
    logger?.debug(`change password for user ${email} in ${__filename}`);

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
    logger?.debug(`reset password request for user ${email} in ${__filename}`);

    try {
      const emailParams = await service.resetPasswordRequest(email);
      emailParams['frontEndUrl'] = options.frontEndUrl;
      await sendEmail('resetPasswordRequest', emailParams);
      return res.status(200).send({ params: emailParams, success: true });
    } catch (error: Error | any) {
      return res.status(500).json({ message: error.message });
    }
  };

  const resetPassword = async (req: Request, res: Response) => {
    const { user, token, password } = req.body;
    logger?.debug(`reset password for user ${user} in ${__filename}`);
    
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

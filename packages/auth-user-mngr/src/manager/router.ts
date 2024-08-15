import { Request, Response, Router } from 'express';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setupUserMngrRouter = (controller: any) => {
  const router = Router();

  router.get('/', (_req: Request, res: Response) => {
    res.send('user mngr is live');
  });

  // router.post('/register', controller.register);
  // router.post('/change-password', controller.changePassword);

  router.post('/reset-password-request', controller.resetPasswordRequest);
  router.post('/reset-password', controller.resetPassword);

  return router;
};

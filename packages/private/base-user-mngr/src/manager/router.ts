import { Request, Response, Router } from 'express';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setupAuthRouter = (controller: any) => {
  const router = Router();

  router.get('/', (_req: Request, res: Response) => {
    res.send('hello world');
  });

  router.post('/login', controller.login);
  router.get('/logout', controller.logout);
  router.post('/register', controller.register);
  router.post('/change-password', controller.changePassword);

  router.post('/reset-password-request', controller.resetPasswordRequest);
  router.post('/reset-password', controller.resetPassword);

  return router;
};

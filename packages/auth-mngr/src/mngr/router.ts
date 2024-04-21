import { AuthMngrOptions } from ".";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setupAuthRouter = (options: AuthMngrOptions, controller: any) => {
  const router = options.router;

  router.post('/login', controller.login);
  router.get('/logout', controller.logout);

  return router;
};
  
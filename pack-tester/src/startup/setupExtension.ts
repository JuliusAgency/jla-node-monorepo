import { authentication, authorization } from '../../../extensions';

export const setupExtension = async ({ config, db, app, router, appDomain }) => {
  const User = appDomain.User;

  const authOptions = {
    app: app,
    config: config,
    db: db,
    User: User
  };
  const { authMiddleware, authRouter } = authentication(authOptions);

  const authorizationOptions = {
    config: config,
    db: db,
  };
  const isAuthorized = await authorization(authorizationOptions);

  // Auth middleware usage
  // Auth router usage
  router.use('/auth', authRouter);
  // Setup the app domain
  const protectedRoutes = appDomain.setupAppDomain({
    router,
    isAuthorized,
    repository: db,
  });

  app.use(protectedRoutes, authMiddleware);
};

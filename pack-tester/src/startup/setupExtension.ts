
import { authentication, authorization } from '../../../extensions';

export const setupExtension = async({ config, db, app, router, User, setupAppDomain }) => {

  const { authMiddleware, authRouter } = authentication({ app, config, db, User });

  const isAuthorized = await authorization({ config, db });

  // Auth middleware usage
  // Auth router usage
  router.use('/auth', authRouter);
  // Setup the app domain
  const repository = db.connectDb;
  const protectedRoutes = setupAppDomain({
    router,
    isAuthorized,
    repository: repository,
  });

  app.use(protectedRoutes, authMiddleware);    
};
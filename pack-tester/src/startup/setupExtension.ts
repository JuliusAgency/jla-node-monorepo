
import { authentication, authorization } from '../../../extensions';

export const setupExtension = ({ config, db, app, router, User, setupAppDomain }) => {

  const { authMiddleware, authRouter } = authentication({ app, config, db, User });

  const isAuthorized = authorization({ config, db });

  // Auth middleware usage
  // Auth router usage
  router.use('/auth', authRouter);
  // Setup the app domain
  const protectedRoutes = setupAppDomain({
    router,
    isAuthorized,
    repository: db.sqlRepository,
  });

  app.use(protectedRoutes, authMiddleware);    
};
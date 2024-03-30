
import { authentication, authorization } from '../../../extensions';

export const setupExtension = async({ config, db, app, router, appDomain }) => {

  const User = appDomain.User;
  const { authMiddleware, authRouter } = authentication({ app, config, db, User });

  const isAuthorized = await authorization({ config, db });

  // Auth middleware usage
  // Auth router usage
  router.use('/auth', authRouter);
  // Setup the app domain
  // const repository = db.connectDb; //mongo
  const protectedRoutes = appDomain.setupAppDomain({
    router,
    isAuthorized,
    repository: db.sqlRepository, //sql
    // repository: repository, // mongo
  });

  app.use(protectedRoutes, authMiddleware);    
};
## Set of packages for Authentication with Session and Mongo Db

The auth-jwt-mongo-set package - is a component of the @juliusagency/node [packages set](https://github.com/JuliusAgency/node-packages-set) for Nodejs applications.  

### Installation
```bash
  npm install --save @juliusagency/auth-jwt-mongo-set
```

### Usage  
```
import {
  AuthJwtOptions,
  AuthJwtSetSetupOptions,
  BaseUser,
  authSetSetup,
} from '@juliusagency/auth-jwt-mongo-set';

  const app: Express = express();

  // Setup Auth with session and MongoDb
  const authJwtOptions: AuthJwtOptions = {
    secretKey: configApp.authJwt.secretKey,
    lifeTime: configApp.authJwt.lifeTime,
  };

  const config: AuthJwtSetSetupOptions = {
    // repository: '',
    User: BaseUser,
    authOpt: authJwtOptions,
  };

  const { authMiddleware, authRouter } = authSetSetup(config);

  // Auth middleware usage
  // Define the protected routes
  const protectedRoutes = ['/first', '/second'];
  app.use(protectedRoutes, authMiddleware);

  // Routers Setup
  const router = Router();
  // Auth router usage
  router.use('/auth', authRouter);
```
## Set of packages for Authentication with JWT and Mongo Db.
![auth-jwt-mongo-set workflow](https://github.com/juliusagency/jla-node-monorepo/actions/workflows/auth-jwt-mongo-set-test.yaml/badge.svg)
![auth-jwt-mongo-set workflow](https://github.com/juliusagency/jla-node-monorepo/actions/workflows/auth-jwt-mongo-set-github.yaml/badge.svg)

The package wraps up the following private packages:
  - base-user-mngr;
  - auth-jwt;
  - auth-strategies;
  - base-user-mongo.

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

  // Setup Auth with JWT and MongoDb
  const authJwtOptions: AuthJwtOptions = {
    secretKey: <secretKey>,
    lifeTime: <lifeTime>,
  };

  const authSetupOptions: AuthJwtSetSetupOptions = {
    User: BaseUser,
    authOpt: authJwtOptions,
    emailer: emailer,
  };

  const { authMiddleware, authRouter } = authSetSetup(authSetupOptions);

  // Auth middleware usage
  // Define the protected routes
  const protectedRoutes = ['/first', '/second'];
  app.use(protectedRoutes, authMiddleware);

  // Routers Setup
  const router = Router();
  // Auth router usage
  router.use('/auth', authRouter);

  ADDITION:
  base user extension example
  default config for session or config example
  info about emailer
  repository examle and config*
```

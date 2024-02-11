## Set of packages for Authentication with JWT and Sql Db
![auth-jwt-sql-set workflow](https://github.com/juliusagency/jla-node-monorepo/actions/workflows/auth-jwt-sql-set-test.yaml/badge.svg)
![auth-jwt-sql-set workflow](https://github.com/juliusagency/jla-node-monorepo/actions/workflows/auth-jwt-sql-set-github.yaml/badge.svg)

The package wraps up the following private packages:
  - base-user-mngr;
  - auth-jwt;
  - auth-strategies;
  - base-user-sql.

### Installation
```bash
  npm install --save @juliusagency/auth-jwt-sql-set
```

### Usage  
```
import {
  AuthJwtOptions,
  AuthJwtSetSetupOptions,
  BaseUser,
  authSetSetup,
} from ''@juliusagency/auth-jwt-sql-set';

  const app: Express = express();

  // Setup Auth with JWT and Sql Db
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
  const protectedRoutes = ['/first', '/second'];
  app.use(protectedRoutes, authMiddleware);

  // Routers Setup
  const router = Router();
  // Auth router usage
  router.use('/auth', authRouter);
```
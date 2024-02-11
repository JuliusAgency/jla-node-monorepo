## Set of packages for Authentication with Session and Sql Db
![auth-ses-sql-set workflow](https://github.com/juliusagency/jla-node-monorepo/actions/workflows/auth-ses-sql-set-test.yaml/badge.svg)
![auth-ses-sql-set workflow](https://github.com/juliusagency/jla-node-monorepo/actions/workflows/auth-ses-sql-set-github.yaml/badge.svg)

The package wraps up the following private packages:
  - base-user-mngr;
  - auth-session;
  - auth-strategies;
  - base-user-sql.

### Installation
```bash
  npm install --save @juliusagency/auth-ses-sql-set
```

### Usage  
```
import {
  AuthConfig,
  AuthSesSetSetupOptions,
  authSetSetup,
  BaseUser,
  authSetSetup,
} from '@juliusagency/auth-ses-sql-set';

  const app: Express = express();

  // Setup Auth with session and Sql Db
  const sesConfig: SessionConfig = {
    name: appConfig.sessionName,
    secret: appConfig.sessionSecret,
    saveUninitialized: appConfig.sessionSaveUninitialized,
    cookie: {
      secure: appConfig.cookieSecure,
      sameSite: appConfig.cookieSameSite,
      httpOnly: appConfig.cookieHttpOnly,
      maxAge: appConfig.cookieMaxAge,
    },
    resave: appConfig.sessionResave,
  };

  const authConfig: AuthConfig = {
    app: app,
    User: User,
    sessionConfig: sesConfig,
  };

  const authSetupOptions: AuthSesSetSetupOptions = {
    authConfig: authConfig,
    emailer: emailer,
    repository: sqlRepository,
  };

  const { authRouter, authMiddleware } = authSetSetup(authSetupOptions);
  
  // Auth middleware usage
  const protectedRoutes = ['/first', '/second'];
  app.use(protectedRoutes, authMiddleware);

  // Routers Setup
  const router = Router();
  // Auth router usage
  router.use('/auth', authRouter);

```


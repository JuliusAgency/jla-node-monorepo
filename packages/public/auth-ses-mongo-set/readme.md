## Set of packages for Authentication with Session and MongoDb
![auth-ses-mongo-set workflow](https://github.com/juliusagency/jla-node-monorepo/actions/workflows/auth-ses-mongo-set-test.yaml/badge.svg)
![auth-ses-mongo-set workflow](https://github.com/juliusagency/jla-node-monorepo/actions/workflows/auth-ses-mongo-set-github.yaml/badge.svg)

The package wraps up the following private packages:
  - base-user-mngr;
  - auth-session;
  - auth-strategies;
  - base-user-mongo.

### Installation
```bash
  npm install --save @juliusagency/auth-ses-mongo-set
```

### Usage  
```
import {
  AuthConfig,
  AuthSesSetSetupOptions,
  authSetSetup,
  BaseUser,
  SessionConfig,
} from ''@juliusagency/auth-ses-mongo-set';

  const app: Express = express();

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


  // Setup Auth with session and MongoDb
  const authConfig: AuthConfig = {
    app: app,
    User: BaseUser,
    sessionConfig: sesConfig,
  };

  const authSetupOptions: AuthSesSetSetupOptions = {
    authConfig: authConfig,
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
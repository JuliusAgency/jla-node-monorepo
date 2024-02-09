## Set of packages for Authentication with Session and Sql Db

The auth-ses-sql-set package - is a component of the @juliusagency/node [packages set](https://github.com/JuliusAgency/node-packages-set) for Nodejs applications.  


### Installation
```bash
  npm install --save @juliusagency/auth-ses-sql-set
```

### Usage  
```
import {
  AuthConfig,
  AuthSesSetSetupOptions,
  BaseUser,
  authSetSetup,
} from '@juliusagency/auth-ses-sql-set';

  const app: Express = express();

 // Setup Auth with session and Sql Db
  const authConfig: AuthConfig = {
    app: app,
    User: User,
    sessionConfig: configApp.session,
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


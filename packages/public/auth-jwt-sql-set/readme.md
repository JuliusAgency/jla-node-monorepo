## Set of packages for Authentication with Session and Sql Db

The auth-jwt-sql-set package - is a component of the @juliusagency/node [packages set](https://github.com/JuliusAgency/node-packages-set) for Nodejs applications.  

### Installation
```bash
  npm install --save @juliusagency/auth-jwt-sql-set
```

### Usage  
```
import {
  AuthConfig,
  BaseUser,
  authSetSetup
} from './lib/auth-jwt-sql-set';

  const app: Express = express();

  // Setup Auth with session and MongoDb
  const config: AuthConfig = {
    app: app,
    User: BaseUser,
    sessionConfig: configApp.session,
  };

  const { authMiddleware, authRouter } = authSetSetup(config);

  // Auth middleware usage
  const protectedRoutes = ['/first', '/second'];
  app.use(protectedRoutes, authMiddleware);

  // Routers Setup
  const router = Router();
  // Auth router usage
  router.use('/auth', authRouter);
```
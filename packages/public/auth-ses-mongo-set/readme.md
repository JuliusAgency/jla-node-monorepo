## Set of packages for Authentication with Session and MongoDb

The auth-ses-mongo-set package - is a component of the @juliusagency/node [packages set](https://github.com/JuliusAgency/node-packages-set) for Nodejs applications.  

### Installation
```bash
  npm install --save @juliusagency/auth-ses-mongo-set
```

### Usage  
```
import {
  AuthConfig,
  BaseUser,
  authSetSetup
} from './lib/auth-ses-mongo-set';

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
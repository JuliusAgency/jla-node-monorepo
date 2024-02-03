## Set of packages for Authorization with Mongo Db and JWT

An authorization with RBAC or ACL  - a solution for Nodejs applications

<!-- <p>
  <a href="https://www.npmjs.com/package/@juliusagency/authorization-jwt-mongo-set" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/@juliusagency/authorization-jwt-mongo-set.svg">
  </a>
  <a href="https://github.com/JuliusAgency/authorization-jwt-mongo-set#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/JuliusAgency/authorization-jwt-mongo-set/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/JuliusAgency/authorization-jwt-mongo-set/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p> -->

### Installation
```bash
  npm install --save @juliusagency/authorization-jwt-mongo-set
```

### Pre-conditions:
```
```

### Usage  
```
import {
  AuthConfig,
  BaseUser,
  authSetSetup
} from './lib/authorization-jwt-mongo-set';

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
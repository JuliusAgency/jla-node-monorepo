## Authentication with express, passport and JWT
![auth-jwt workflow](https://github.com/juliusagency/jla-node-monorepo/actions/workflows/auth-jwt-test.yaml/badge.svg)
![auth-jwt workflow](https://github.com/juliusagency/jla-node-monorepo/actions/workflows/auth-jwt-github.yaml/badge.svg)

The auth-jwt package - is a component of the @juliusagency/node [packages set](https://github.com/JuliusAgency/node-packages-set) for Nodejs applications.  

### Installation
```bash
  npm install --save @juliusagency/auth-jwt
```

### Usage  
```
  import { AuthJwtOptions, setupAuthMiddleware } from '@juliusagency/auth-jwt';  

  // Auth middleware setup
  const authJwtOptions: AuthJwtOptions = {
    secretKey: process.env.SECRET_JWT,
    lifeTime: 5, // minutes
  };
  const { authMiddleware, encodeToken } = setupAuthMiddleware(authJwtOptions);
  const protectedRoutes = ['/first', '/second'];
  app.use(protectedRoutes, authMiddleware);

  // Setup routers ...

```
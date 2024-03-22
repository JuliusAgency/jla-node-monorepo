## Authentication with express, passport and passport-session
![auth-session workflow](https://github.com/juliusagency/jla-node-monorepo/actions/workflows/auth-session-test.yaml/badge.svg)
![auth-session workflow](https://github.com/juliusagency/jla-node-monorepo/actions/workflows/auth-session-github.yaml/badge.svg)

The auth-session package - is a component of the @juliusagency/node [packages set](https://github.com/JuliusAgency/node-packages-set) for Nodejs applications.  

### Installation
```bash
  npm install --save @juliusagency/auth-session
```

### Usage  
```
import {
  CookieConfig,
  SessionConfig,
  AuthConfig,
  setupAuthMiddleware,
} from ' @juliusagency/auth-session';

import { BaseUser, dBApi } from '@juliusagency/base-user-mongo' or '@juliusagency/base-user-sql';


  const app: Express = express();

  // Auth middleware setup
  const cookieConfig: CookieConfig = {
    secure: process.env.COOKIE_SECURE,
    sameSite: process.env.COOKIE_SAME_SITE,
    httpOnly: process.env.COOKIE_HTTP_ONLY,
    maxAge: process.env.COOKIE_MAX_AGE,
  };

  const sessionConfig: SessionConfig = {
    name: process.env.SESSION_NAME,
    secret: process.env.SESSION_SECRET,
    saveUninitialized: process.env.SESSION_SAVE_UNINITIALIZED,
    cookie: cookieConfig,
    resave: process.env.SESSION_RESAVE,
  };

  const config: AuthConfig = {
    app: app,
    dBApi: dBApi(BaseUser),
    sessionConfig: sessionConfig,
  };

  const authMiddleware = setupAuthMiddleware(config);
  const protectedRoutes = ['/first', '/second', ...];
  app.use(protectedRoutes, authMiddleware);

  // Setup routers ...

```
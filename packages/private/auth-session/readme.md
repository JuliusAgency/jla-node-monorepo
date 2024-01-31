## Authentication with express, passport and passport-session

The auth-session package - is a component of the @juliusagency/node [packages set](https://github.com/JuliusAgency/node-packages-set) for Nodejs applications.  

<!-- <p>
  <a href="https://www.npmjs.com/package/@juliusagency/auth-session" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/@juliusagency/auth-session.svg">
  </a>
  <a href="https://github.com/JuliusAgency/auth-session#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/JuliusAgency/auth-session/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/JuliusAgency/auth-session/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>
 -->
### Installation
```bash
  npm install --save @juliusagency/auth-session
```

### Pre-conditions:
```
The package is dedicated to be used with the following @juliusagency packages:
  - @juliusagency/base-user-mongo or @juliusagency/base-user-sql
```

### Usage  
```
import {
  CookieConfig,
  SessionConfig,
  AuthConfig,
  setupAuthMiddleware,
} from './lib/auth-session';

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
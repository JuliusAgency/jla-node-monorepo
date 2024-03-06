## Set of packages for Authentication with Session and MongoDb
![auth-ses-mongo-set workflow](https://github.com/juliusagency/jla-node-monorepo/actions/workflows/auth-ses-mongo-set-test.yaml/badge.svg)
![auth-ses-mongo-set workflow](https://github.com/juliusagency/jla-node-monorepo/actions/workflows/auth-ses-mongo-set-github.yaml/badge.svg)

The package wraps up the following private packages:
  - [base-user-mngr](https://github.com/JuliusAgency/jla-node-monorepo/pkgs/npm/base-user-mngr);
  - [auth-session](https://github.com/JuliusAgency/jla-node-monorepo/pkgs/npm/auth-session);
  - [auth-strategies](https://github.com/JuliusAgency/jla-node-monorepo/pkgs/npm/auth-strategies);
  - [base-user-mongo](https://github.com/JuliusAgency/jla-node-monorepo/pkgs/npm/base-user-mongo).

The package uses the [simple-emailer](https://github.com/JuliusAgency/jla-node-monorepo/pkgs/npm/simple-emailer).  

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

### Extend BaseUser (example)
```
import { Schema } from "mongoose";

import { BaseUser } from "@juliusagency/base-user-mongo";


export interface UserInterface {
  role: string; // if an authorization will be used
  phone?: string;
}

const UserSchema = new Schema<UserInterface>({
  role: { // if authorization will be used
    type: string,
    required: true,
    default: 'guest',
  },
  phone: {
    type: String,
    required: false,
  },
}, {collection: 'users'});

export const User = BaseUser.discriminator("user", UserSchema);
```

### Configuration (example)
1. Add to the .env following vars:
```
SESSION_SECRET=your-app-session-secret
SESSION_SAVE_UNINITIALIZED=false
SESSION_RESAVE=false
SESSION_NAME=your-app-session-secret
COOKIE_SECURE=false
COOKIE_SAME_SITE=lax
COOKIE_HTTP_ONLY=true
COOKIE_MAX_AGE=3600000
COOKIE_DOMAIN=your-app-cookie-domain

```
2. For more information about the package configuration look at the readme files of the wrapped and used packages.

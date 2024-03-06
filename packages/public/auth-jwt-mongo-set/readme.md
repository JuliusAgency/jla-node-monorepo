## Set of packages for Authentication with JWT and Mongo Db.
![auth-jwt-mongo-set workflow](https://github.com/juliusagency/jla-node-monorepo/actions/workflows/auth-jwt-mongo-set-test.yaml/badge.svg)
![auth-jwt-mongo-set workflow](https://github.com/juliusagency/jla-node-monorepo/actions/workflows/auth-jwt-mongo-set-github.yaml/badge.svg)

The package wraps up the following private packages:
  - [base-user-mngr](https://github.com/JuliusAgency/jla-node-monorepo/pkgs/npm/base-user-mngr);
  - [auth-jwt](https://github.com/JuliusAgency/jla-node-monorepo/pkgs/npm/auth-jwt);
  - [auth-strategies](https://github.com/JuliusAgency/jla-node-monorepo/pkgs/npm/auth-strategies);
  - [base-user-mongo](https://github.com/JuliusAgency/jla-node-monorepo/pkgs/npm/base-user-mongo).

The package uses the [simple-emailer](https://github.com/JuliusAgency/jla-node-monorepo/pkgs/npm/simple-emailer).  

### Installation
```bash
  npm install --save @juliusagency/auth-jwt-mongo-set
```

### Usage  
```
import {
  AuthJwtOptions,
  AuthJwtSetSetupOptions,
  BaseUser,
  authSetSetup,
} from '@juliusagency/auth-jwt-mongo-set';

  const app: Express = express();

  // Setup Auth with JWT and MongoDb
  const authJwtOptions: AuthJwtOptions = {
    secretKey: <secretKey>,
    lifeTime: <lifeTime>,
  };

  const authSetupOptions: AuthJwtSetSetupOptions = {
    User: BaseUser,
    authOpt: authJwtOptions,
    emailer: emailer
  };

  const { authMiddleware, authRouter } = authSetSetup(authSetupOptions);

  // Auth middleware usage
  // Define the protected routes
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
1. Create a random JWT secret key
```bash
  node -e "console.log(require('crypto').randomBytes(256).toString('base64'));"
```
2. Add to the .env following vars:
```
SECRET_JWT=random-jwt-secret-key   
LIFETIME=N # Minutes
```
3. For more information about the package configuration look at the readme files of the wrapped and used packages.

## Set of packages for Authentication with Session and Sql Db
![auth-ses-sql-set workflow](https://github.com/juliusagency/jla-node-monorepo/actions/workflows/auth-ses-sql-set-test.yaml/badge.svg)
![auth-ses-sql-set workflow](https://github.com/juliusagency/jla-node-monorepo/actions/workflows/auth-ses-sql-set-github.yaml/badge.svg)

The package wraps up the following private packages:
  - [base-user-mngr](https://github.com/JuliusAgency/jla-node-monorepo/pkgs/npm/base-user-mngr);
  - [auth-session](https://github.com/JuliusAgency/jla-node-monorepo/pkgs/npm/auth-session);
  - [auth-strategies](https://github.com/JuliusAgency/jla-node-monorepo/pkgs/npm/auth-strategies);
  - [base-user-sql](https://github.com/JuliusAgency/jla-node-monorepo/pkgs/npm/base-user-sql).

### Installation
```bash
  npm install --save @juliusagency/auth-ses-sql-set
```

### Usage  
```
import {
  AuthConfig,
  AuthSesSetSetupOptions,
  authSetSetup,
  BaseUser,
  authSetSetup,
} from '@juliusagency/auth-ses-sql-set';

  const app: Express = express();

  // Setup Auth with session and Sql Db
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

  const authConfig: AuthConfig = {
    app: app,
    User: User,
    sessionConfig: sesConfig,
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

### Extend BaseUser (example)
```
import { BaseUser } from "@juliusagency/base-user-sql";
import { Column, Entity } from "typeorm";

@Entity()
export class User extends BaseUser {
  @Column({ type: 'varchar', default: 'guest' })
  // eslint-disable-next-line indent
  role: string;
  @Column({ nullable: true })
  // eslint-disable-next-line indent
  phone: string;
};
```

### Replace BaseUser (example)
```
 @Entity('users')
 export class User {
   @PrimaryGeneratedColumn({ name: "id", type: "bigint" })
   id!: number;
   @Column({ name: 'name', type: 'varchar', nullable: false })
   name: string;
   @Column({ name: 'email', type: 'varchar', nullable: false })
   email: string;
   @Column({ name: 'password', type: 'varchar', nullable: false })
   password: string;
   @Column()
   createdAt: Date;
   @Column({ type: 'varchar', default: 'guest' })
   role: string;
   @Column({ nullable: true })
   phone: string;
 };
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

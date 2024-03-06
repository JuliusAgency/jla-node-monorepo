## Set of packages for Authentication with JWT and Sql Db
![auth-jwt-sql-set workflow](https://github.com/juliusagency/jla-node-monorepo/actions/workflows/auth-jwt-sql-set-test.yaml/badge.svg)
![auth-jwt-sql-set workflow](https://github.com/juliusagency/jla-node-monorepo/actions/workflows/auth-jwt-sql-set-github.yaml/badge.svg)

The package wraps up the following private packages:
  - [base-user-mngr](https://github.com/JuliusAgency/jla-node-monorepo/pkgs/npm/base-user-mngr);
  - [auth-jwt](https://github.com/JuliusAgency/jla-node-monorepo/pkgs/npm/auth-jwt);
  - [auth-strategies](https://github.com/JuliusAgency/jla-node-monorepo/pkgs/npm/auth-strategies);
  - [base-user-sql](https://github.com/JuliusAgency/jla-node-monorepo/pkgs/npm/base-user-sql).

The package uses the [simple-emailer](https://github.com/JuliusAgency/jla-node-monorepo/pkgs/npm/simple-emailer).  

### Installation
```bash
  npm install --save @juliusagency/auth-jwt-sql-set
```

### Usage  
```
import {
  AuthJwtOptions,
  AuthJwtSetSetupOptions,
  BaseUser,
  authSetSetup,
} from ''@juliusagency/auth-jwt-sql-set';

  const app: Express = express();

  // Setup Auth with JWT and Sql Db
  const authJwtOptions: AuthJwtOptions = {
    secretKey: <secretKey>,
    lifeTime: <lifeTime>,
  };

  const authSetupOptions: AuthJwtSetSetupOptions = {
    User: BaseUser,
    authOpt: authJwtOptions,
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

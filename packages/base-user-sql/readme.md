## Base User Sql
![base-user-sql workflow](https://github.com/juliusagency/jla-node-monorepo/actions/workflows/base-user-sql-test.yaml/badge.svg)
![base-user-sql workflow](https://github.com/juliusagency/jla-node-monorepo/actions/workflows/base-user-sql-github.yaml/badge.svg)

The base-user-sql package - is a component of the @juliusagency/node [packages set](https://github.com/JuliusAgency/node-packages-set) for Nodejs applications.  

### Installation
```bash
  npm install --save @juliusagency/base-user-sql
```

### Usage  
```
  import { BaseUser, dBApi } from '@juliusagency/base-user-sql';
  
  // setup strategy and auth manager with the BaseUser
  const baseUser = sqlRepository(BaseUser);

  const strategyOptions: StrategyOptions = {
    passport: passport,
    dBApi: dBApi(baseUser),
  };
  const strategy = initStrategies(strategyOptions);

  // setup Auth manager  
    const authMngrOPtions: AuthMngrOPtions = {  
    User: baseUser,  
    encode: encodeToken,  
    strategy: strategy,
    session: false,  
  };  
  const authRouter = setupAuthManager(authMngrOPtions);  

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
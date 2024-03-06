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

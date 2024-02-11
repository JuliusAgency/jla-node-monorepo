## Auth-strategies
![auth-strategies workflow](https://github.com/juliusagency/jla-node-monorepo/actions/workflows/auth-strategies-test.yaml/badge.svg)
![auth-strategies workflow](https://github.com/juliusagency/jla-node-monorepo/actions/workflows/auth-strategies-github.yaml/badge.svg)

The auth-strategies package - is a component of the @juliusagency/node [packages set](https://github.com/JuliusAgency/node-packages-set) for Nodejs applications.  

### Installation
```bash
  npm install --save @juliusagency/auth-strategies
```

### Usage  
```
  import { initStrategies, StrategyOptions } from '@juliusagency/auth-strategies';
  import { BaseUser, dBApi } from '@juliusagency/base-user-sql'; // @juliusagency/base-user-mongo


  // setup 
  const baseUser = sqlRepository(BaseUser);
  const strategyOptions: StrategyOptions = {
    passport: passport,
    dBApi: dBApi(baseUser),
  };
  const strategy = initStrategies(strategyOptions);

```
## Auth-strategies

The auth-strategies package - is a component of the @juliusagency/node [packages set](https://github.com/JuliusAgency/node-packages-set) for Nodejs applications.  

<!-- <p>
  <a href="https://www.npmjs.com/package/@juliusagency/auth-strategies" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/@juliusagency/auth-strategies.svg">
  </a>
  <a href="https://github.com/JuliusAgency/auth-strategies#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/JuliusAgency/auth-strategies/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/JuliusAgency/auth-strategies/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p> -->

### Installation
```bash
  npm install --save @juliusagency/auth-strategies
```

### Pre-conditions:
```
The package is dedicated to be used with the following @juliusagency packages:
  - @juliusagency/base-user-mongo or @juliusagency/base-user-sql
  - @juliusagency/auth-jwt or auth-session;  
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
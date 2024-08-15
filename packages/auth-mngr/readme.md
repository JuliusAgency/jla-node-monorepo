## Th auth-mngr package


### Installation
```bash
  npm install --save @juliusagency/auth-mngr
```

### Pre-conditions:
The package is dedicated to be used with the following @juliusagency packages:
- auth-strategy-local
- auth-strategy-social
- auth-utils

### Prepare for the usage
- define strategy list
- define login field name for local strategies
- define id, secret, callback and id field name for social strategies  

### Usage

#### Configuration
```
export type AuthMngrOptions = {
  strategiesDef: Array<AuthStrategyDef>;
  common: AuthMngrOptionsCommon;
};

// for each strategy
export type AuthStrategyDef = {
  passport: any;
  strategy: any;
  validation?: any;
};

export type AuthMngrOptionsCommon = {
  router: any;
  User: any;
  utils: any;
  session: boolean;
  encode?: any;
  logger?: any;
};
```


## Set of packages for Authorization with JWT and Sql Db
![authorization-jwt-sql-set workflow](https://github.com/juliusagency/jla-node-monorepo/actions/workflows/authorization-jwt-sql-set-test.yaml/badge.svg)
![authorization-jwt-sql-set workflow](https://github.com/juliusagency/jla-node-monorepo/actions/workflows/authorization-jwt-sql-set-github.yaml/badge.svg)

The package wraps up the following private packages:
  - [authorization-jwt-checker](https://github.com/JuliusAgency/jla-node-monorepo/pkgs/npm/authorization-jwt-checker);
  - [authorization-repo-sql](https://github.com/JuliusAgency/jla-node-monorepo/pkgs/npm/authorization-repo-sql).

### Installation
```bash
  npm install --save @juliusagency/authorization-jwt-sql-set
```

### Usage  
```
  import {
    initRules,
    ModelType,
    setupAuthorizationSet,
    AuthorizationJwtSetSetupOptions,
  } from '@juliusagency/authorization-jwt-sql-set';

  // Setup
  const type = ModelType.RBAC(ModelType.ACL);

  const setupOptions: AuthorizationJwtSetSetupOptions = {
    connection: connection,
    type: type,
    secret: <secretKey>,
  };

  const isAuthorized = setupAuthorizationSet(setupOptions);

  ...
  
  // Usage
  // Routers Setup
  const router = Router();
  
  ...

  // Authorization-rbac
  router.get('/test-rbac', isAuthorized('read'), (_req, res) => {
    res.json({ message: 'You are authorized to access this resource' });
  });

  // Authorization-acl
  router.get('/test-acl', isAuthorized('read', 'test-acl'), (_req, res) => {
    res.json({ message: 'You are authorized to access this resource' });
  });

```

### Authorization definitions (example)
Permissions are defined in the CRUD order.

#### RBAC:
```
{
  rules: [
    {
      role: 'admin',
      permission: [true, true, true, true],
    },
    {
      role: 'user',
      permission: [false, true, false, false],
    },
    {
      role: 'guest',
      permission: [false, false, false, false],
    },
  ],
};
```

#### ACL:
```
{
  rules: [
    {
      role: 'admin',
      resource: 'test-acl',
      permission: [true, true, true, true],
    },
    {
      role: 'admin',
      resource: 'users',
      permission: [true, true, true, true],
    },
    {
      role: 'user',
      resource: 'test-acl',
      permission: [true, true, true, true],
    },
    {
      role: 'user',
      resource: 'users',
      permission: [false, true, true, false],
    },
    {
      role: 'user',
      resource: 'users/user',
      permission: [false, true, true, false],
    },
    {
      role: 'guest',
      resource: 'test-acl',
      permission: [false, false, false, false],
    },
    {
      role: 'guest',
      resource: 'users',
      permission: [false, false, false, false],
    },
  ],
};
```
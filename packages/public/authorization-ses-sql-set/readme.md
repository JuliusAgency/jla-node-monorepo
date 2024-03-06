## Set of packages for Authorization with session and Sql Db
![authorization-ses-sql-set workflow](https://github.com/juliusagency/jla-node-monorepo/actions/workflows/authorization-ses-sql-set-test.yaml/badge.svg)
![authorization-ses-sql-set workflow](https://github.com/juliusagency/jla-node-monorepo/actions/workflows/authorization-ses-sql-set-github.yaml/badge.svg)

The package wraps up the following private packages:
  - [authorization-ses-checker](https://github.com/JuliusAgency/jla-node-monorepo/pkgs/npm/authorization-ses-checker);
  - [authorization-repo-sql](https://github.com/JuliusAgency/jla-node-monorepo/pkgs/npm/authorization-repo-sql).

### Installation
```bash
  npm install --save @juliusagency/authorization-ses-sql-set
```

### Usage  
```

  import {
    ModelType,
    setupAuthorizationSet,
  } from '@juliusagency/authorization-ses-sql-set';

  // Setup
  const type = ModelType.RBAC(ModelType.ACL);
  const isAuthorized = setupAuthorizationSet(connection, type);

  ...

  // Usage
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
## Authorization checker for app with session.
![authorization-jwt-checker workflow](https://github.com/juliusagency/jla-node-monorepo/actions/workflows/authorization-jwt-checker-test.yaml/badge.svg)
![authorization-jwt-checker workflow](https://github.com/juliusagency/jla-node-monorepo/actions/workflows/authorization-jwt-checker-github.yaml/badge.svg)

A npm package that provides access control authorized routers for Node.js projects.  
The package is dedicated to be used with the @juliusagency/authorization-repo-<database> packages. 
Supports ACL - Access Control List and RBAC - Role Based Access Control methods. 

### Installation
```bash
  npm install @juliusagency/authorization-jwt-checker
```

### Pre-conditions:
```
  The package @juliusagency/authorization-repo<database> has to be installed.  
  The User model (table) has to have **role: string** property.  
```

### Usage  
```
  import { authorization } from '@juliusagency/authorization-jwt-checker';  

  // Init the rules repository  
  const rulesRepo = rulesRepository(ModelType.ACL);  
  // Init the authorization package  
  const isAuthorized = authorization({ rulesRepo }, { getUserData });  

The isAuthorized parameters: (permission: string, resource?: string) 

Protect an authorized router:  
  router.get(  
    '/test-acl',  
    checkAuthenticated,  
    isAuthorized('read', 'test-acl'),  
    (_req, res) => {  
      res.json({ message: 'You are authorized to access this resource' });  
    },  
  );  
  
router.get(  
  '/test-rbac',  
  checkAuthenticated,  
  isAuthorized('read'),  
  (_req, res) => {  
    res.json({ message: 'You are authorized to access this resource' });  
  },  
);  
```

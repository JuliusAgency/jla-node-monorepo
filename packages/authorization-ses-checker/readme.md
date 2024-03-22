## Authorization checker for app with session.
![authorization-ses-checker workflow](https://github.com/juliusagency/jla-node-monorepo/actions/workflows/authorization-ses-checker-test.yaml/badge.svg)
![authorization-ses-checker workflow](https://github.com/juliusagency/jla-node-monorepo/actions/workflows/authorization-ses-checker-github.yaml/badge.svg)

A npm package that provides access control authorized routers for Node.js projects.  
The package is dedicated to be used with the @juliusagency/authorization-repo-<database> packages. 
Supports ACL - Access Control List and RBAC - Role Based Access Control methods. 
Only authorization-repo-mongo is implemented at present.  

### Installation
```bash
  npm install @juliusagency/authorization-ses-checker
```

### Usage  
```
  import { authorization } from '@juliusagency/authorization-ses-checker';  

  // Init the rules repository  
  const rulesRepo = rulesRepository(ModelType.ACL);  
  // Init the authorization package  
  const isAuthorized = authorization({ rulesRepo }, { getUserData });  

  // The isAuthorized parameters: (permission: string, resource?: string) 

  //Protect an authorized router:  
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

## Authorization definitions on MongoDb.
![authorization-repo-mongo workflow](https://github.com/juliusagency/jla-node-monorepo/actions/workflows/authorization-repo-mongo-test.yaml/badge.svg)
![authorization-repo-mongo workflow](https://github.com/juliusagency/jla-node-monorepo/actions/workflows/authorization-repo-mongo-github.yaml/badge.svg)

A npm package that provides access to authorization definitions for Node.js projects.  
The package is dedicated to be used with the @juliusagency/authorization-checker package.  
Supports ACL - Access Control List and RBAC - Role Based Access Control methods. 

### Installation
```bash
  npm install @juliusagency/authorization-repo-mongo
```

### Usage
```
  import { ModelType, initRules, rulesRepository } from '@juliusagency/authorization-repo-mongo';

  // If an application doesn't use a Rules Management feature do the following (once only):
  // Create authorization definitions - acl.json or rbac.json file.    
  // Add the file into the .gitignore.  

  //Populate the authorization definitions into the application DataBase:  
  initRules(ModelType.ACL, aclData);
  // or:  
  initRules(ModelType.RBAC, rbacData);

  // The authorization repository is ready to be used (injected into) by  
  // the @juliusagency/authorization-checker package.  

```

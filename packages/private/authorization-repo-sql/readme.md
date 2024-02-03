## Authorization definitions on Sql Db.

A npm package that provides access to authorization definitions for Node.js projects.  
The package is dedicated to be used with the @juliusagency/authorization-ses<jwt>-checker package.  
Supports ACL - Access Control List and RBAC - Role Based Access Control methods. 

<!-- <p>
  <a href="https://www.npmjs.com/package/@juliusagency/authorization-repo-sql" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/@juliusagency/authorization-repo-sql.svg">
  </a>
  <a href="https://github.com/juliusagency/authorization-repo-sql#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/juliusagency/authorization-repo-sql/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/juliusagency/authorization-repo-sql/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p> -->

### Installation
```bash
  npm install @juliusagency/authorization-repo-sql
```

### Usage
```
import { ModelType, initRules, rulesRepository } from '@juliusagency/authorization-repo-sql';

If an application doesn't use a Rules Management feature do the following (once only):

Create authorization definitions - acl.json or rbac.json file.    

Add the file into the .gitignore.  

Populate the authorization definitions into the application DataBase:  
  initRules(ModelType.ACL, aclData);
or:  
  initRules(ModelType.RBAC, rbacData);

The authorization repository is ready to be used (injected into) by  
the @juliusagency/authorization-checker package.  

```

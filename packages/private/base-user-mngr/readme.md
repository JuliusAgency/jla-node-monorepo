## Base User manager for app with base-user-mongo (base-user-sql)

The base-user-mngr package - is a component of the @juliusagency /node [packages set](https://github.com/JuliusAgency/node-packages-set) for Nodejs applications.  

<!-- <p>
  <a href="https://www.npmjs.com/package/@juliusagency /base-user-mngr" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/@juliusagency /base-user-mngr.svg">
  </a>
  <a href="https://github.com/JuliusAgency/base-user-mngr#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/JuliusAgency/base-user-mngr/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/JuliusAgency/base-user-mngr/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p> -->

### Installation
```bash
  npm install --save @juliusagency /base-user-mngr
```

### Pre-conditions:
```
The package is dedicated to be used with the following @juliusagency  packages:
  - @juliusagency /auth-jwt or auth-session;  
  - @juliusagency /auth-strategies;  
  - @juliusagency /base-user-mongo; or '@juliusagency /base-user-sql   
```

### Usage  
```
  import { AuthMngrOPtions, setupAuthManager } from '@juliusagency /base-user-mngr';  
  import { BaseUser } from '@juliusagency /base-user-sql' (@juliusagency /base-user-mongo);  

  // Initialize the package  
  const authMngrOPtions: AuthMngrOPtions = {  
    User: baseUser,  
    encode: encodeToken,  
    strategy: strategy,  
  };  

  const authRouter = setupAuthManager(authMngrOPtions);  

  // Use the authRouter....  

```
### API
```
  register: 
   POST:   
  	 url: https://{uri}/auth/register  
	 body: {  
	    "name": "",  
	    "email": "",  
	    "password": "",  
	}  
   
  login:  
   POST:   
  	 url: https://{uri}/auth/login  
	 body: {  
	    "email": "",  
	    "password": ""  
	}  

  logout:  
   GET:   
  	 url: https://{uri}/auth/login  

  change password:  
   POST:   
  	url: https://{uri}/auth/logout  
  change password:  
  	url: https://{uri}/auth/change-password  
	body: {  
	    "email":"",  
	    "password":"",  
	    "passwordNew":""  
	}  
  
  reset password request:  
   POST:   
   	url: https://{uri}/auth/reset-password-request  
   	body: {  
	    "email": ""  
	}  
  
  reset password:  
   POST:   
   	url: https://{uri}/auth/reset-password  
   	body: {  
	    "user": "",  
	    "token": "",  
	    "password": ""  
	}  
```
## Base User manager for app with base-user-mongo (base-user-sql)
![base-user-mngr workflow](https://github.com/juliusagency/jla-node-monorepo/actions/workflows/base-user-mngr-test.yaml/badge.svg)
![base-user-mngr workflow](https://github.com/juliusagency/jla-node-monorepo/actions/workflows/base-user-mngr-github.yaml/badge.svg)

The base-user-mngr package - is a component of the @juliusagency /node [packages set](https://github.com/JuliusAgency/node-packages-set) for Nodejs applications.  

### Installation
```bash
  npm install --save @juliusagency /base-user-mngr
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
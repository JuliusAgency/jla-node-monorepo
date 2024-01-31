## Base User model for app with MongoDb

The base-user-mongo package - is a component of the @juliusagency/node [packages set](https://github.com/JuliusAgency/node-packages-set) for Nodejs applications.  

<!-- <p>
  <a href="https://www.npmjs.com/package/@juliusagency/base-user-mongo" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/@juliusagency/base-user-mongo.svg">
  </a>
  <a href="https://github.com/JuliusAgency/base-user-mongo#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/JuliusAgency/base-user-mongo/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/JuliusAgency/base-user-mongo/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p> -->

### Installation
```bash
  npm install --save @juliusagency/base-user-mongo
```

### Pre-conditions:
```
The package is dedicated to be used with the following @juliusagency packages:
  - @juliusagency/auth-jwt or auth-session;  
  - @juliusagency/auth-strategies;  
  - @juliusagency/base-user-mngr;  
```

### Usage  
```
  import { BaseUser } from './lib/base-user-mongo';

  // Use the model for setup auth strategies and base user manager...
```

### Extend BaseUser (example)
```
import { Schema } from "mongoose";

import { BaseUser } from "@juliusagency/base-user-mongo";


export interface UserInterface {
  role: string; // if an authorization will be used
  phone?: string;
}

const UserSchema = new Schema<UserInterface>({
  role: { // if authorization will be used
    type: string,
    required: true,
    default: 'guest',
  },
  phone: {
    type: String,
    required: false,
  },
}, {collection: 'users'});

export const User = BaseUser.discriminator("user", UserSchema);
```


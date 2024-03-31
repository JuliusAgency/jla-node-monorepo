## Base User model for app with MongoDb
![base-user-mongo workflow](https://github.com/juliusagency/jla-node-monorepo/actions/workflows/base-user-mongo-test.yaml/badge.svg)
![base-user-mongo workflow](https://github.com/juliusagency/jla-node-monorepo/actions/workflows/base-user-mongo-github.yaml/badge.svg)

The base-user-mongo package - is a component of the @juliusagency/node [packages set](https://github.com/JuliusAgency/node-packages-set) for Nodejs applications.  

### Installation
```bash
  npm install --save @juliusagency/base-user-mongo
```

### Usage  
```
  import { BaseUser } from '@juliusagency/lib/base-user-mongo';

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


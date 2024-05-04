## Login via a social media account from node js with express and passport.

### Installation
```bash
  npm install --save @juliusagency/auth-strategy-social
```

### Pre-conditions:
The package is dedicated to be used with the following @juliusagency packages:
```
  @juliusagency/simple-logger
  @juliusagency/auth-utils
  @juliusagency/auth-mngr
  @juliusagency/auth-verify-service-social
```

### Prepare for usage   

#### Google:
To implement Google Login, you need to set up a Google API project. Follow these steps:

1. Go to the Google Developers Console (**https://console.developers.google.com/**).
2. Create a new project or select an existing one.
3. Enable the "Google+ API" for your project.
4. Navigate to the "Credentials" section and click on "Create Credentials."
5. Choose "OAuth client ID" as the credential type.
6. Select "Web application" as the application type.
7. Enter a name for your OAuth client ID.
8. Add authorized JavaScript origins (e.g., http://localhost:3000) and redirect URIs (e.g., **http://localhost:3000/auth/google/callback**).
9. Click "Create" to generate the client ID and client secret.

### Usage 
```
import { cryptUtils, CryptUtilsOptions } from '@juliusagency/auth-utils';
import passport from 'passport';
import { Strategy } from 'passport-module';  
// where passport-module one from: 
  1. passport-github2,  
  2. passport-google-oauth20,  
  3. e.t.c   
import { initVerify, VerifyOptions } from '@juliusagency/auth-verify-service-social';
import { initStrategy, StrategyOptions } from '@juliusagency/auth-strategy-social';
import { AuthMngrOptions, AuthMngrOptionsCommon, AuthStrategyDef, initAuthMngr } from '@juliusagency/auth-mngr';

...

const router = Router();
// for example
const strategies = {'google': Strategy};

// Setup the strategy and the user manager with the user
// Strategy
const cryptUtilsOptions: CryptUtilsOptions = {
  salt: Number(config.salt),
};

const utils = cryptUtils(cryptUtilsOptions);

const verifyOptions: VerifyOptions = {
  dBApi: user,
  logger: logger,
};
const verify = initVerify(verifyOptions);
const strategyOptions: StrategyOptions = {
  verify: verify,
  strategy: strategies.google,
  clientId: GOOGLE_ID,
  clientSecret: GOOGLE_SECRET,
  callbackUrl: [your app home page url]/auth/google/callback,
  logger: logger,
};
const google = initStrategy(strategyOptions);

// Auth manager
const googleStrategyDef: AuthStrategyDef = {
  passport: passport,
  strategy: google,
};
const authMngrOptionsCommon: AuthMngrOptionsCommon = {
  router: router,
  User: user,
  utils: utils,
  session: false [true], // depend of session/jwt authentication type 
  encode: encodeToken,
  logger: logger,
};
const authMngrOptions: AuthMngrOptions = {
  strategiesDef: [googleStrategyDef],
  common: authMngrOptionsCommon,
};
// Will create auth router and controller for each of the defined strategies,
// and bind them
const authRouter = initAuthMngr(authMngrOptions);

// Routers usage
// Auth router
router.use('/auth', authRouter);

All your remaining routers
...

app.use(router);
```


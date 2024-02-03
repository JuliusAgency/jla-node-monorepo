## Wrapper for simple email client

The simple-emailer package - is a component of the @juliusagency/node [packages set](https://github.com/JuliusAgency/node-packages-set) for Nodejs applications.  

<p>
  <a href="https://www.npmjs.com/package/@juliusagency/simple-emailer" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/@juliusagency/simple-emailer.svg">
  </a>
  <a href="https://github.com/JuliusAgency/simple-emailer#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/JuliusAgency/simple-emailer/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/JuliusAgency/simple-emailer/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

### Installation
```bash
  npm install --save @juliusagency/simple-emailer
```

### Pre-conditions:
```
The package is dedicated to be used with the following @juliusagency packages:
  - @juliusagency/auth-ses-mongo-set |
  [@juliusagency/auth-ses-sql-set |  
  @juliusagency/auth-jwt-mongo-set |  
  @juliusagency/auth-jwt-sql-set]
```

### Usage 
```
import {
  EmailerConfigOptions,
  emailerSetup,
} from './lib/simple-emailer';

  const emailerConfig: EmailerConfigOptions = {
    name: 'gmail',
    user: process.env.SMTP_USERNAME,
    password: process.env.SMTP_PASSWORD,
  };

  const emailer = emailerSetup(emailConfig);

  // Use the emailer ...
```
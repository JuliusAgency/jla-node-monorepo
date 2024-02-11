## Wrapper for simple email client
![simple-emailer workflow](https://github.com/juliusagency/jla-node-monorepo/actions/workflows/simple-emailer-test.yaml/badge.svg)
![simple-emailer workflow](https://github.com/juliusagency/jla-node-monorepo/actions/workflows/simple-emailer-github.yaml/badge.svg)

The simple-emailer package - is a component of the @juliusagency/node [packages set](https://github.com/JuliusAgency/node-packages-set) for Nodejs applications.  

### Installation
```bash
  npm install --save @juliusagency/simple-emailer
```

### Usage 
```
import {
  EmailerConfigOptions,
  emailerSetup,
} from '@juliusagency/simple-emailer';

  const emailerConfig: EmailerConfigOptions = {
    name: 'gmail',
    user: process.env.SMTP_USERNAME,
    password: process.env.SMTP_PASSWORD,
  };

  const emailer = emailerSetup(emailConfig);

  // Use the emailer ...
```
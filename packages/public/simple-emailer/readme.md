## Simple emailer
![simple-emailer workflow](https://github.com/juliusagency/jla-node-monorepo/actions/workflows/simple-emailer-test.yaml/badge.svg)
![simple-emailer workflow](https://github.com/juliusagency/jla-node-monorepo/actions/workflows/simple-emailer-github.yaml/badge.svg)

The package wraps up the private package:
  - [simple-email-client](https://github.com/JuliusAgency/jla-node-monorepo/pkgs/npm/simple-email-client);

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

  // Configure
  const emailerConfig: EmailerConfigOptions = {
    name: 'gmail',
    user: process.env.SMTP_USERNAME,
    password: process.env.SMTP_PASSWORD,
  };

  // Create
  const emailer = emailerSetup(emailConfig);

  // Send resetPasswordRequest
  const params = {
    name: user_name,
    email: user_email,
    token: resetToken,
    id: userId,
  };

  const emailOptions = emailer.buildEmail('resetPasswordRequest', params);
  await emailer.sendEmail(emailOptions);
```

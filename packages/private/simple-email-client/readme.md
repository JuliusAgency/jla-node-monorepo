## Simple Email Client
![simple-email-client workflow](https://github.com/juliusagency/jla-node-monorepo/actions/workflows/simple-email-client-test.yaml/badge.svg)
![simple-email-client workflow](https://github.com/juliusagency/jla-node-monorepo/actions/workflows/simple-email-client-github.yaml/badge.svg)

A simple email client for sending email via Gmail.

### Installation
```bash
  npm install @juliusagency/simple-email-client
```
### Usage
```
import EmailClient from "@juliusagency/simple-email-client";
import { EmailParams } from "@juliusagency/simple-email-client/lib/cjs/types/Types";

// Initialization
const config = {
  name: "gmail",
  user: "<the-account-owner-email>",
  password: "<the-account-owner-password>"
};

const emailClient = new EmailClient.EmailClient(config);

// Build an email
const params: EmailParams = {
  email: "<receiver-email>",
  name: "<receiver-name>",
};

const email = emailClient.buildEmail("signUpUser", params);
// Send the email
const send = async (email) => {
  await emailClient.sendEmail(email);    
};

send(email);
```
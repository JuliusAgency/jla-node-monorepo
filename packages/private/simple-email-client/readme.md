## Simple Email Client

A simple email client for sending email via Gmail.

<!-- <p>
  <a href="https://www.npmjs.com/package/@juliusagency/simple-email-client" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/@juliusagency/simple-email-client.svg">
  </a>
  <a href="https://github.com/jla/simple-email-client#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/jla/simple-email-client/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/jla/simple-email-client/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p> -->

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
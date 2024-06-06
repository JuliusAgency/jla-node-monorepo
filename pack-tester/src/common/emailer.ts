import { TransportConfig, EmailClient } from '../../../packages/simple-email-client/src';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setupEmailer = (config: any) => {
  // Wrap up the client
  const transport: TransportConfig = {
    name: 'gmail',
    user: config.emailer.smtpUserName,
    password: config.emailer.smtpPassword,
  };

  const emailer = new EmailClient(transport);
  return emailer;
};

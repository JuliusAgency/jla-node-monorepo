/* eslint-disable @typescript-eslint/no-explicit-any */
export type AuthMngrOPtions = {
  User: any;
  Token: any;
  encode?: any;
  salt: number,
  strategy: any;
  session: boolean;
  emailer?: any;
};

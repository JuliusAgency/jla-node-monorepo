export type CookieConfig = {
  secure: string;
  sameSite: string;
  httpOnly: string;
  maxAge: string;
  domain?: string;
}
export type SessionConfig = {
  secret: string;
  name: string;
  saveUninitialized: string;
  cookie: CookieConfig;
  resave: string;
};

type Cookie = {
  secure: boolean;
  sameSite: boolean | "strict" | "none" | "lax" | undefined;
  httpOnly: boolean;
  maxAge: number;
  domain?: string;
}
export type SessionOptions = {
  secret: string;
  name: string;
  saveUninitialized: boolean;
  cookie: Cookie;
  resave: boolean;
};

export type AuthConfig = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  app: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  passport: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  User: any;
  sessionConfig: SessionConfig;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  storage?: any;
};

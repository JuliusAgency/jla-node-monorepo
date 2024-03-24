import { Express } from "express";
export type CookieConfig = {
    secure: string;
    sameSite: string;
    httpOnly: string;
    maxAge: string;
    domain?: string;
};
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
};
export type SessionOptions = {
    secret: string;
    name: string;
    saveUninitialized: boolean;
    cookie: Cookie;
    resave: boolean;
};
export type AuthConfig = {
    app: Express;
    User: any;
    sessionConfig: SessionConfig;
    storage?: any;
};
export {};

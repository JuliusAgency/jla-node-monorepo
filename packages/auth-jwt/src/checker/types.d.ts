export type AuthJwtOptions = {
    secretKey: string;
    lifeTime: number;
};
export type Session = {
    email: string;
    issued: number;
    expires: number;
};
export type PartialSession = Omit<Session, 'issued' | 'expires'>;
export type ExpirationStatus = 'expired' | 'active' | 'grace';
export type EncodeResult = {
    token: string;
    expires: number;
    issued: number;
};
export type DecodeResult = {
    type: 'valid';
    session: Session;
} | {
    type: 'integrity-error';
} | {
    type: 'invalid-token';
};
//# sourceMappingURL=types.d.ts.map
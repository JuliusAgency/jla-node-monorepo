export type AuthJwtOptions = {
  secretKey: string;
  lifeTime: number; // in minutes
};

export type Session = {
  email: string;
  issued: number;
  expires: number;
};
// Like Session, but without the `issued` and `expires` properties.
export type PartialSession = Omit<Session, 'issued' | 'expires'>;
export type ExpirationStatus = 'expired' | 'active' | 'grace';
export type EncodeResult = {
  token: string;
  expires: number;
  issued: number;
};

export type DecodeResult =
  | {
      type: 'valid';
      session: Session;
    }
  | {
      type: 'integrity-error';
    }
  | {
      type: 'invalid-token';
    };

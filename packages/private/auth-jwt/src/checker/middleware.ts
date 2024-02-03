/**
 * Auth Express middleware, checks for a valid JSON Web Token
 * and returns 401 Unauthorized if one isn't found.
 * Based on
 * https://nozzlegear.com/blog/implementing-a-jwt-auth-system-with-typescript-and-node
 */
import { Request, Response, NextFunction } from 'express';
import { decode, encode, TAlgorithm } from 'jwt-simple';
import {
  AuthJwtOptions,
  DecodeResult,
  EncodeResult,
  ExpirationStatus,
  PartialSession,
  Session,
} from './types';

export const setupAuthMiddleware = (options: AuthJwtOptions) => {
  const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const unauthorized = (message: string) =>
      res.status(401).json({
        ok: false,
        status: 401,
        message: message,
      });

    const requestHeader = 'X-JWT-Token';
    const responseHeader = 'X-Renewed-JWT-Token';
    const header = req.header(requestHeader);

    if (!header) {
      unauthorized(`Required ${requestHeader} header not found.`);
      return;
    }
    const decodedSession: DecodeResult = decodeToken(header);
    if (
      decodedSession.type === 'integrity-error' ||
      decodedSession.type === 'invalid-token'
    ) {
      unauthorized(
        `Failed to decode or validate authorization token. Reason: ${decodedSession.type}.`,
      );
      return;
    }

    const expiration: ExpirationStatus = checkExpiration(
      decodedSession.session,
    );
    if (expiration === 'expired') {
      unauthorized(
        `Authorization token has expired. Please create a new authorization token.`,
      );
      return;
    }
    let session: Session;
    if (expiration === 'grace') {
      // Automatically renew the session and send it back with the response
      const { token, expires, issued } = encodeToken(decodedSession.session);
      session = {
        ...decodedSession.session,
        expires: expires,
        issued: issued,
      };

      res.setHeader(responseHeader, token);
    } else {
      session = decodedSession.session;
    }

    // Set the session on response.locals object for routes to access
    res.locals = {
      ...res.locals,
      session: session,
    };
    // Request has a valid or renewed session. Call next to continue to the authenticated route handler
    next();
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const encodeToken = (partialSession: PartialSession): EncodeResult => {
    const algorithm: TAlgorithm = 'HS512';

    // Determine when the token should expire
    const issued = Date.now();
    const lifeTime = options.lifeTime * 60 * 1000;
    const expires = issued + lifeTime;
    const session = {
      ...partialSession,
      issued: issued,
      expires: expires,
    };

    return {
      token: encode(session, options.secretKey, algorithm),
      issued: issued,
      expires: expires,
    };
  };

  const decodeToken = (token: string): DecodeResult => {
    const algorithm: TAlgorithm = 'HS512';
    let result: Session;
    try {
      result = decode(token, options.secretKey, false, algorithm);
    } catch (_e) {
      const e: Error = _e as Error;
      // These error strings can be found here:
      // https://github.com/hokaccha/node-jwt-simple/blob/c58bfe5e5bb049015fcd55be5fc1b2d5c652dbcd/lib/jwt.js
      if (
        e.message === 'No token supplied' ||
        e.message === 'Not enough or too many segments'
      ) {
        return { type: 'invalid-token' };
      }
      if (
        e.message === 'Signature verification failed' ||
        e.message === 'Algorithm not supported'
      ) {
        return { type: 'integrity-error' };
      }
      // Handle json parse errors, thrown when the payload is nonsense
      if (e.message.indexOf('Unexpected token') === 0) {
        return { type: 'invalid-token' };
      }
      throw e;
    }
    return {
      type: 'valid',
      session: result,
    };
  };
  const checkExpiration = (token: Session): ExpirationStatus => {
    const now = Date.now();

    if (token.expires > now) return 'active';

    // Find the timestamp for the end of the token's grace period
    const lifeTime = options.lifeTime * 60 * 1000;
    const newExpiration = token.expires + lifeTime;

    if (newExpiration > now) return 'grace';

    return 'expired';
  };

  return { authMiddleware, encodeToken };
};

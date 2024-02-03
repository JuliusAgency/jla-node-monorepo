import { Response, NextFunction } from 'express';
import { decode, TAlgorithm } from 'jwt-simple';

import {
  DecodeResult,
  Session,
} from './types';

import { getPermissions } from './service';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setupAuthorization = ({ rulesRepo }, config: any) => {
  const isAuthorized = (permission: string, resource?: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return async (req: any, res: Response, next: NextFunction) => {
      const forbidden = (message: string) =>
        res.status(403).json({
          ok: false,
          status: 403,
          message: message,
        });

      const requestHeader = 'X-JWT-Token';
      const header = req.header(requestHeader);

      if (!header) {
        forbidden(`Required ${requestHeader} header not found.`);
        return;
      }

      const decodedSession: DecodeResult = decodeToken(header);
      // Get role from the session
      const role = decodedSession['session']['role'];

      if (await permitted(role, permission, resource)) {
        return next();
      };
      forbidden('You have no permission for the operation');
    };
  };

  const permitted = async (
    role: string,
    permission: string,
    resource?: string,
  ) => {
    const permissions = await getPermissions({ rulesRepo })(role, resource) as [string];
    return permissions[permission];
  };

  const decodeToken = (token: string): DecodeResult => {
    const algorithm: TAlgorithm = 'HS512';
    let result: Session;
    try {
      result = decode(token, config.secret, false, algorithm);
    } catch (_e) {
      const e: Error = _e as Error;
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

  return isAuthorized;
};

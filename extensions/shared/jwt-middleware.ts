import { AuthJwtOptions, setupAuthMiddleware } from '../../packages/auth-jwt/src';
import { AuthOptions } from './types';

// Middleware
export const jwtMiddleware = (authOptions: AuthOptions) => {
  const { config } = authOptions;
  const authOpt: AuthJwtOptions = {
    lifeTime: config.lifeTime,
    secretKey: config.secretKey,
  };
  const {authMiddleware, encodeToken } = setupAuthMiddleware(authOpt); 
  
  return { authMiddleware, encodeToken };
};

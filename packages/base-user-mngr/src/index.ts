/**
 * Base User manager package.
 * Performs base user's operations:
 *  - Register,
 *  - Login,
 *  - Change password,
 */
import { setupAuthController } from './manager/controller';
import { setupAuthRouter } from './manager/router';
import { setupAuthService } from './manager/service';
import { AuthMngrOPtions } from './manager/types';

export { AuthMngrOPtions } from './manager/types';

export const setupAuthManager = (options: AuthMngrOPtions) => {
  const service = setupAuthService(options);
  const controller = setupAuthController(options, service);

  return setupAuthRouter(controller);
};
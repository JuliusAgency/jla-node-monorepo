/**
 * Base User manager package.
 * Performs base user's operations:
 *  - Register,
 *  - Login,
 *  - Change password,
 */
import { setupUserMngrController } from './manager/controller';
import { setupUserMngrRouter } from './manager/router';
import { setupUserMngrService } from './manager/service';
import { UserMngrOPtions } from './manager/types';

export { UserMngrOPtions } from './manager/types';

export const setupUserManager = (options: UserMngrOPtions) => {
  const service = setupUserMngrService(options);
  const controller = setupUserMngrController(options, service);

  return setupUserMngrRouter(controller);
};
/**
 * The extended User
 */
import { setupUserController } from './controller';
import { setupUserRouter } from './router';

export { User } from './model';

export const setupUsers = ({ isAuthorized, db }) => {
  const controller = setupUserController({ db });
  return setupUserRouter({ isAuthorized, controller });
};

/**
 * The extended User
 */
import { setupUserController } from './controller';
import { setupUserRouter } from './router';

export { User } from './model';

export const setupUsers = ({ isAuthorized, repository }) => {
  const controller = setupUserController({ repository });
  return setupUserRouter({ isAuthorized, controller });
};

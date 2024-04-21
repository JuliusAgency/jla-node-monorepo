/**
 * The extended User
 */
import { setupUserController } from './sql'; //'./mongo'; //

import { setupUserRouter } from './router';

export { User } from './sql'; // './mongo'; //

export const setupUsers = ({ isAuthorized, repository }) => {
  const controller = setupUserController({ repository });
  return setupUserRouter({ isAuthorized, controller });
};

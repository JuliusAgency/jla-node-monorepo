/**
 * The extended User
 */
import { setupUserController } from './mongo';
// import { setupUserController } from './sql';

import { setupUserRouter } from './router';

export { User } from './mongo';
// export { User } from './sql';

export const setupUsers = ({ isAuthorized, repository }) => {
  const controller = setupUserController({ repository });
  return setupUserRouter({ isAuthorized, controller });
};

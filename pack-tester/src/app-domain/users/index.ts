/**
 * The extended User
 */
import { setupUserController } from './controller';
import { setupUserRouter } from './router';

export { User } from './model_sql';
// export { User } from './model_mongo';

export const setupUsers = ({ isAuthorized, repository }) => {
  const controller = setupUserController({ repository });
  return setupUserRouter({ isAuthorized, controller });
};

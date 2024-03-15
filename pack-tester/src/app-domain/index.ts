/**
 * Application domains
 */
import { setupUsers } from './users';
import { setupExamples } from './examples';

export { User } from './users';

export const setupAppDomain = ({ router, isAuthorized, sqlRepository }) => {
  const usersRouter = setupUsers({ isAuthorized, sqlRepository });
  const examplesRouter = setupExamples({ isAuthorized });
  router.use('/users', usersRouter);
  router.use('/examples', examplesRouter);

  return ['/users', '/examples']; // protected routes
};

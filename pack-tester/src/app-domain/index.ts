/**
 * Application domains
 */
import { setupUsers } from './users';
import { setupExamples } from './examples';

export { User } from './users';

export type AppDomainDependencies = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  logger: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  router: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Router: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  repository: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  isAuthorized: any;
};

export const appDomain = (dependencies: AppDomainDependencies) => {
  const { router } = dependencies;

  const usersRouter = setupUsers(dependencies);
  const examplesRouter = setupExamples(dependencies);
  router.use('/users', usersRouter);
  router.use('/examples', examplesRouter);
};

export const protectedRoutes = ['/users', '/examples'];

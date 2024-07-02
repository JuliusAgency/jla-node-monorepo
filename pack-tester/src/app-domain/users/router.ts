import { AppDomainDependencies } from '..';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setupUserRouter = (dependencies: AppDomainDependencies, controller: any) => {
  const { logger, Router, isAuthorized } = dependencies;
  logger.debug(`setupUserRouter - ${__filename}`);
  const router = Router();
  router.get(
    '/',
    // isAuthorized('read', 'users'),
    isAuthorized('read'), // RBAC
    controller.getAllUsers, // ACL
  );
  router.get(
    '/:userId',
    // isAuthorized('read', 'users/user'),
    isAuthorized('read'),
    controller.getUserById,
  );
  return router;
};

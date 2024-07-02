/**
 * The extended User
 */
import { AppDomainDependencies } from '..';
import { setupUserController } from './mongo'; //'./sql'; //

import { setupUserRouter } from './router';

export { User } from './mongo'; // './sql'; //

export const setupUsers = (dependencies: AppDomainDependencies) => {
  const controller = setupUserController(dependencies.logger);
  return setupUserRouter(dependencies, controller);
};

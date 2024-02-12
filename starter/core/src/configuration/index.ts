/**
 *
 * The entry point of the config module.
 *
 * The idea here is to hint at every property the configuration
 * expects for JS and TS usage, increasing the Developer Experience (DX).
 * https://www.raulmelo.me/en/blog/best-practices-for-handling-per-environment-config-js-ts-applications
 */

import dotenv from 'dotenv';

import { createDevConfig } from './envs/dev';
import { createProdConfig } from './envs/prod';
import { createTestConfig } from './envs/tests';

dotenv.config();

export const appConfig = getConfig();

function getConfig() {
  switch (process.env.NODE_ENV) {
    case 'prod':
      return createProdConfig();
    case 'dev':
      return createDevConfig();
    case 'tests':
      return createTestConfig();
    default:
      throw new Error('Invalid NODE_ENV "${process.env.NODE_ENV}"');
  }
}

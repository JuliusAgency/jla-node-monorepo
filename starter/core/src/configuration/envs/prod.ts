import { createConfig } from '../create';

export function createProdConfig() {
  return createConfig({
    env: 'prod',

    // server
    port: process.env.PORT || '',
    baseUrl: process.env.BACKEND_BASE_URL || '',
  });
}

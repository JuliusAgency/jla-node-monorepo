import { createConfig } from '../create';

export function createTestConfig() {
  return createConfig({
    env: 'tests',

    // server
    port: process.env.PORT || '',
    baseUrl: process.env.BACKEND_BASE_URL || '',

    // options
    mocksEnabled: true,
});
}

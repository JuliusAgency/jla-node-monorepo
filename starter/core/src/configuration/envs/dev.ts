import { createConfig } from '../create';

export const createDevConfig = () => {
  return createConfig({
    env: 'dev',

    // server
    port: '3050',
    baseUrl: 'http://127.0.0.1',
    
    // options
    mocksEnabled: true,
  });
}

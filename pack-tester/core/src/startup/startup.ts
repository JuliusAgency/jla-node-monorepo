import { startupDb } from './startupDb';
import { startupServer } from './startupServer';

export const startup = async () => {
  const config = await startupDb();
  startupServer(config);
};

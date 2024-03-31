// import { appConfig } from '../configuration';

import { LoggerFormatter, initHttpLogger } from '../../../packages/http-logger/src';
import { LoggerOptions, initLogger } from '../../../packages/simple-logger/src';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setupLogger = (config: any) => {
  const loggerConfig: LoggerOptions = {
    // loggerLevel: appConfig.logger.loggerLevel,
    loggerLevel: config.loggerLevel,
  };

  const logger = initLogger(loggerConfig);

  const formatter: LoggerFormatter = {
    token: ':remote-addr :method :url :status :res[content-length] - :response-time ms',
  };
  const httpLogger = initHttpLogger(logger, formatter);
  return { logger, httpLogger };
};

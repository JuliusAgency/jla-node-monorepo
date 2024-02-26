// import { appConfig } from '../configuration';

import { LoggerFormatter, initHttpLogger } from '@juliusagency/http-logger';
import { LoggerOptions, initLogger } from '@juliusagency/simple-logger';

export const setupLogger = () => {
  const loggerConfig: LoggerOptions = {
    // loggerLevel: appConfig.logger.loggerLevel,
    loggerLevel: 'http',
  };

  const logger = initLogger(loggerConfig);

  const formatter: LoggerFormatter = {
    token:
      ':remote-addr :method :url :status :res[content-length] - :response-time ms',
  };
  const httpLogger = initHttpLogger(logger, formatter);
  return { logger, httpLogger };
};

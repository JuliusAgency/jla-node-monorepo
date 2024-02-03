import morgan, { StreamOptions } from "morgan";
import { Logger } from "winston";

export type LoggerFormatter = {
  token: string;
};

export const initHttpLogger = (logger: Logger, formatter: LoggerFormatter) => {
  // Override the stream method by telling
  // Morgan to use our custom logger instead of the console.log.
  const stream: StreamOptions = {
    // Use the http severity
    write: (message: string) => logger.http(message),
  };

  // Build the morgan middleware
  return morgan( 
    formatter.token,
    // Options: overwrite the stream.
    { stream }
  );
};

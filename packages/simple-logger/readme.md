## Simple Logger
![simple-logger workflow](https://github.com/juliusagency/jla-node-monorepo/actions/workflows/simple-logger-test.yaml/badge.svg)
![simple-logger workflow](https://github.com/juliusagency/jla-node-monorepo/actions/workflows/simple-logger-github.yaml/badge.svg)

A simple logger for Nodejs applications.

### Installation
```bash
  npm install @juliusagency/simple-logger
```
### Usage
```

import { initLogger, level, LoggerOptions, loggerOptionsRotated } from '@juliusagency/simple-logger';

// Possible cases of the logger initialization:
// 1. Logging to the console:
const loggerConfig: LoggerOptions = {
  loggerService: <your-app-name>,
  loggerLevel: level.http,
};

// 2. Logging to a stream (file for example):
const wrStream = createWriteStream(<path and log file name>);
const logStream: loggerOptionsStream = {
  stream: wrStream,
};
const loggerConfig: LoggerOptions = {
  loggerService: <your-app-name>,
  loggerLevel: level.http,
  loggerOptionsRotated: logStream,
};

// 2. Logging to a local rotated file:
const logRotated: loggerOptionsRotated = {
  fullFilename: <path and log files prefix  name>,
  datePattern: <date pattern>,
  fileMaxSize: <max file size>,
  maxFiles: <max number of the log files>,
  zippedArchive: "true/false",
};

const loggerConfig: LoggerOptions = {
  loggerService: <your-app-name>,
  loggerLevel: level.http,
  loggerOptionsRotated: logRotated,
};

const logger = initLogger(loggerConfig);

// Usage
logger.info("Test Info logger");
```
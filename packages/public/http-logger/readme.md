## Http Logger
![http-logger workflow](https://github.com/juliusagency/jla-node-monorepo/actions/workflows/http-logger-test.yaml/badge.svg)
![http-logger workflow](https://github.com/juliusagency/jla-node-monorepo/actions/workflows/http-logger-github.yaml/badge.svg)

A Http logger for Nodejs applications.

### Installation
```bash
  npm install @juliusagency/http-logger
```
### Usage
```
import { LoggerFormatter, initHttpLogger } from '@juliusagency/http-logger';

// Initialization
const cfg: LoggerFormatter = {
  token: ':remote-addr :method :url :status :res[content-length] - :response-time ms'
};

const HttpLogger = initHttpLogger(cfg);

// Usage
app.use(httpLogger);
```

### Message formatting
Define message format string (this is the default one).  
```
  ":method :url :status :res[content-length] - :response-time ms",  
  ":remote-addr :method :url :status :res[content-length] - :response-time ms",  
  ":remote-addr - :remote-user [:date[clf]] ':method :url HTTP/:http-version' :status 
    :res[content-length] ':referrer' ':user-agent",  
```
The message format is made from tokens, and each token is  
defined inside the [Morgan library](https://www.npmjs.com/package/morgan).  
It is possible to create a custom token.  

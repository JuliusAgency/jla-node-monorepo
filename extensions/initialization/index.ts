export const dbType = 'MONGO'; // || 'SQL';
const authType = 'SES'; // || 'JWT';

export const getConfigMapping = () => {
  const dbMap = configDbMapping[dbType.toLowerCase()];
  return {
    ...dbMap,
    ...configCommonMapping['cors'],
    ...configCommonMapping['logger'],
    ...configAuthMapping['authentication'][authType.toLowerCase()],
    ...configAuthStrategies,
    ...configAuthorizationMapping,
  };
};

// TO DO: Definitions - move to json files
const configDbMapping = {
  sql: {
    type: '$$$$postgres',
    dbUrl: 'POSTGRES_URI',
    ssl: '$$$$false',
  },
  mongo: {
    dbUrl: 'MONGO_URI',
    dbName: 'MONGO_NAME',
  },
};

const configCommonMapping = {
  cors: {
    credentials: 'CORS_CREDENTIALS',
    origin: 'CORS_ORIGINAL',
  },
  logger: {
    loggerLevel: 'SIMPLE_LOGGER_LEVEL',
  },
};

const configAuthMapping = {
  authentication: {
    ses: {
      session: {
        name: 'SESSION_NAME',
        secret: 'SESSION_SECRET',
        saveUninitialized: 'SESSION_SAVE_UNINITIALIZED',
        cookie: {
          secure: 'COOKIE_SECURE',
          sameSite: 'COOKIE_SAME_SITE',
          httpOnly: 'COOKIE_HTTP_ONLY',
          maxAge: 'COOKIE_MAX_AGE',
        },
        resave: 'SESSION_RESAVE',
      },
      salt: 'SALT_WORK_FACTOR',
    },
    jwt: {
      secretKey: 'SECRET_JWT',
      lifeTime: 'LIFE_TIME',
      salt: 'SALT_WORK_FACTOR',
    },
  },
};

const configAuthStrategies = {
  strategyNameSets: {
    pathes: 'STRATEGIES_PATHES',
    auth: {
      names: 'STRATEGIES_NAMES_AUTH',
      local: {
        loginFieldName: 'LOGIN_FIELD_NAME_AUTH',
      },
    },
    test: {
      names: 'STRATEGIES_NAMES_TEST',
      local: {
        loginFieldName: 'LOGIN_FIELD_NAME_TEST',
      },
      github: {
        id: 'GITHUB_ID_TEST',
        secret: 'GITHUB_SECRET_TEST',
        callback: 'GITHUB_CALLBACK_TEST', 
        idFieldName: 'GITHUB_ID_FIELD_NAME',
      },
      google: {
        id: 'GOOGLE_ID_TEST',
        secret: 'GOOGLE_SECRET_TEST',
        callback: 'GOOGLE_CALLBACK_TEST',  
        idFieldName: 'GOOGLE_ID_FIELD_NAME',
      },
    },
  },
};

const configAuthorizationMapping = {
  modelType: 'AUTHORIZATION_MODEL_TYPE',
  test: 'TEST',
};


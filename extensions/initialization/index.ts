export const dbType = 'MONGO'; // || 'SQL';
const authType = 'SES'; // || 'JWT';

export const getConfigMapping = () => {
  const dbMap = configDbMapping[dbType.toLowerCase()];
  return {
    ...dbMap,
    ...configCommonMapping['cors'],
    ...configCommonMapping['logger'],
    ...configAuthMapping['authentication'][authType.toLowerCase()],
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
    },
    jwt: {
      secretKey: 'SECRET_JWT',
      lifeTime: 'LIFE_TIME',
    },
  },
};

const configAuthorizationMapping = {
  modelType: 'AUTHORIZATION_MODEL_TYPE',
  test: 'TEST',
};

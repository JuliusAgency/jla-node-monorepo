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
    ...configAuthStrategies,
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
      loginFieldName: 'LOGIN_FIELD_NAME',
    },
    jwt: {
      secretKey: 'SECRET_JWT',
      lifeTime: 'LIFE_TIME',
      salt: 'SALT_WORK_FACTOR',
      loginFieldName: 'LOGIN_FIELD_NAME',
    },
  },
};

const configAuthorizationMapping = {
  modelType: 'AUTHORIZATION_MODEL_TYPE',
  test: 'TEST',
};

const configAuthStrategies = {
  // Github
  githubId: 'GITHUB_ID',
  githubSecret: 'GITHUB_SECRET',
  githubCallback: 'GITHUB_CALLBACK',
  // Google
  googleId: 'GOOGLE_ID',
  googleSecret: 'GOOGLE_SECRET',
  googleCallback: 'GOOGLE_CALLBACK',
};
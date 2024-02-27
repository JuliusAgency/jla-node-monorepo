export const getConfigMapping = (dbType: string) => {

  const dbMap = configDbMapping[dbType.toLowerCase()]; 
  return{ 
    ...dbMap, 
    ...configCommonMapping['cors'],
    ...configCommonMapping['logger'],
    ...configAuthMapping['session'] };
};

// Definitions - move to json files
const configDbMapping = {
  'sql': {
    'dbUrl' : 'POSTGRES_URI',
  },
  'mongo': {
    'dbUrl' : 'MONGO_URI',
    'dbName': 'MONGO_NAME',  
  },
};

const configCommonMapping = {
  'cors': {
    'credentials' : 'CORS_CREDENTIALS',
    'origin': 'CORS_ORIGINAL'  
  },
  'logger': {
    'loggerLevel': 'SIMPLE_LOGGER_LEVEL',
  },
};

const configAuthMapping = {
  'session': {
    'name': 'SESSION_NAME',
    'secret': 'SESSION_SECRET',
    'saveUninitialized': 'SESSION_SAVE_UNINITIALIZED',
    'cookie': {
      'secure': 'COOKIE_SECURE',
      'sameSite': 'COOKIE_SAME_SITE',
      'httpOnly': 'COOKIE_HTTP_ONLY',
      'maxAge': 'COOKIE_MAX_AGE',
    },
    'resave': 'SESSION_RESAVE',
  },
  'jwt': {
    'loggerLevel': 'SIMPLE_LOGGER_LEVEL',
  },
};
/**
 * Set of modules for authorization with session and Sql Db
 * Exports:
 *  BaseUser - for the registration and creation an extended User Entity
 *  Token - for the registration
 *  TransportConfig - for the simple-email-client configuration
 *  AuthConfig - for auth-session configuration
 *  authSetSetup - the entry point
 */
export {
  BaseUser,
  SessionConfig,
  Token,
  AuthSesSetSetupOptions,
  AuthConfig,
  authSetSetup,
} from './auth-setup';
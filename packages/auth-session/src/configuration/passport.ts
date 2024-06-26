/* eslint-disable @typescript-eslint/no-explicit-any */
export const setupPassport = (authConfig: any): void => {

  authConfig.passport.serializeUser((id: any, done: any): void => {
    /***
     * If authentication succeeds, passport.authenticate calls the serializeUser
     * function, passing in the user object. 
     * serializeUser creates a unique identifier for the user and stores it in the session.
     * After the done function, it passes to the next middleware in the chain.
     */
    done(null, id);
  });

  authConfig.passport.deserializeUser((id: any, done: any): void => {
    /***
     * Is called with the user identifier stored in the session. 
     * deserializeUser retrieves the user object from the database using the identifier, 
     * and passes it to the next middleware in the chain.
     */

    const user = authConfig.User.findById(id);
    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  });

  // // init passport on every route call
  // config.app.use(passport.initialize());
  // // passport.session has to be used after 
  // // express.session in order to work properly.
  // // allow passport to use "express-session"
  // config.app.use(passport.session());
  // // passport function that calls the strategy to be executed
  // config. app.use(passport.authenticate('session'));
};

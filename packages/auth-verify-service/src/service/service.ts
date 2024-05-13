/* eslint-disable @typescript-eslint/no-explicit-any */

export type VerifyOptions = {
  dBApi: any;
  utils: any;
  logger?: any;
};

export const initVerify = (options: VerifyOptions) => {
  const { dBApi, utils, logger } = options;
  logger?.debug(`Init Verify service for local strategy - ${__filename}`);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const verifyUser = async (loginFieldName: string, usernameField: string, password: string, done: any) => {
    try {
      if (!usernameField) {
        done(null, false);
      }
      if (loginFieldName === 'email') {
        usernameField = usernameField.toLowerCase();
      };

      const user = await dBApi.findOne({ [loginFieldName]: usernameField });
      if (!user) {
        return done(null, false, { message: 'User not found.' });
      }
      if (user && user[loginFieldName] != usernameField) {
        done(null, false, { message: 'User or password incorrect' });
      }
      if (!(await utils.compare(password, user.password))) {
        done(null, false, { message: 'User or password incorrect' });
      } else {
        done(null, user);
      }
    } catch (e) {
      done(e);
    }
  };
  return verifyUser;
};
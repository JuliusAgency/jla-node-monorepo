/* eslint-disable @typescript-eslint/no-explicit-any */
export type VerifyOptions = {
  dBApi: any;
  logger?: any;
};

export const initVerify = (options: VerifyOptions) => {
  const { dBApi, logger } = options;
  logger?.debug(`Init Verify service - ${__filename}`);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const verifyUser = async (_accessToken: string, _refreshToken: string, profile: any, done: any) => {
    try {
      logger?.debug(`Verify user ${profile?.id} - ${__filename}`);
      logger?.debug(`Verify user ${profile?.provider} - ${__filename}`);
      const socialId = `${profile?.provider}_id`;

      const user = await dBApi.findOne({[socialId]: profile.id});
      if (!user) {
        logger?.debug(`User ${profile.id} not exists - redirect to the register ${__filename}`);
        const key = `${profile.provider}_id`;
        done(null, { [key]: profile.id});

      } else {
        logger?.debug(`User ${profile.id} exists - login - in ${__filename}`);
        done(null, user);
      }
    } catch (e) {
      logger?.error(`Error ${e} - in ${__filename}`);
      done(e);
    }
  };
  return verifyUser;
};
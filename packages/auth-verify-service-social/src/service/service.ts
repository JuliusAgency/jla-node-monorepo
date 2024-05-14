/* eslint-disable @typescript-eslint/no-explicit-any */
export type VerifyOptions = {
  dBApi: any;
  socialIdFieldName?: string;
  logger?: any;
};

export const initVerify = (options: VerifyOptions) => {
  const { dBApi, logger, socialIdFieldName } = options;
  logger?.debug(`Init Verify service for social strategy - ${__filename}`);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const verifyUser = async (_accessToken: string, _refreshToken: string, profile: any, done: any) => {
    const socialIdName = socialIdFieldName ? socialIdFieldName : `${profile?.provider}_id`;
    try {
      logger?.debug(`Verify user ${profile?.id} - ${__filename}`);
      logger?.debug(`Verify user ${profile?.provider} - ${__filename}`);

      const user = await dBApi.findOne({[socialIdName]: profile.id});
      if (!user) {
        logger?.debug(`User ${profile.id} not exists - redirect to the register ${__filename}`);
        done(null, false,{ 'profile': profile});
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
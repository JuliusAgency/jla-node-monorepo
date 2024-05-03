/* eslint-disable @typescript-eslint/no-explicit-any */
export type VerifyOptions = {
  dBApi: any;
  logger: any;
};

export const initVerify = (options: VerifyOptions) => {
  const { dBApi, logger } = options;
  logger.debug(`Init Verify service - ${__filename}`);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const verifyUser = async (_accessToken: string, _refreshToken: string, profile: any, done: any) => {
    logger.debug(`Verify user ${profile.id} - ${__filename}`);
    logger.debug(`Verify user ${profile.provider} - ${__filename}`);
    const socialId = `${profile.provider}_id`;
    try {
      // const user = await dBApi.findById({_id: '663273fb3766d47dc5eacd6e'});
      const user = await dBApi.findOne({[socialId]: profile.id});
      if (!user) {
        logger.debug(`User ${profile.id} not exists - create new one in ${__filename}`);
        // Create new one and save via registration service

        const newUser = 
        {
          "name": "user1",
          "email": "user1@gmail.com",
          "password": "111111",
          "role": "user",
          "github_id": profile.id,
        };
        const user = await dBApi.save(newUser);
        done(null, user);

      } else {
        logger.debug(`User ${profile.id} exists - login - in ${__filename}`);
        done(null, user);
      }
    } catch (e) {
      logger.error(`Error ${e} - in ${__filename}`);
      done(e);
    }
  };
  return verifyUser;
};
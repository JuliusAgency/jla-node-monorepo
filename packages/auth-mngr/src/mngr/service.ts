import { AuthMngrOptionsCommon } from ".";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setupAuthStrategyService = (options: AuthMngrOptionsCommon) => {
  const { User, utils } = options;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const register = async (loginFieldName: string, newUser: any) => {
    try {
      if (!newUser[loginFieldName]) throw new Error('missing credentials');
      if (loginFieldName === 'email') {
        newUser[loginFieldName].toLowerCase();
      };
      const user = await User.findOne({ [loginFieldName]: newUser[loginFieldName] });
      if (user) {
        throw new Error('User already exist');
      } else {
        // const newUser = req.body;
        newUser.password = await utils.hash(newUser.password);
        newUser.createdAt = new Date();
        try {
          const user = await User.save(newUser);
          return user;
        } catch (e) {
          throw(e);
        }
      }
    } catch (e) {
      throw(e);
    }
  };
  return {
    register,
  };
};      
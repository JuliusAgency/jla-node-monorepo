import { AuthMngrOptionsCommon } from ".";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setupAuthStrategyService = (options: AuthMngrOptionsCommon) => {
  const { User, utils } = options;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const register = async (userUniquePropName: string, newUser: any) => {
    try {
      if (!newUser[userUniquePropName]) throw new Error('missing credentials');
      if (userUniquePropName === 'email') {
        newUser[userUniquePropName].toLowerCase();
      };
      const user = await User.findOne({ [userUniquePropName]: newUser[userUniquePropName] });
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const changePassword = async (userUniquePropName: string, data: any) => {
    if (!data[userUniquePropName]) throw new Error('missing credentials');
    if (userUniquePropName === 'email') {
      data[userUniquePropName].toLowerCase();
    };
    const user = await User.findOne({ [userUniquePropName]: data[userUniquePropName] });
    if (!user) throw new Error("the user doesn't exists!");

    // Check credentials
    if (!(await utils.compare(data['password'], user.password))) {
      throw new Error('Something wrong with credentials');
    }

    // Change password
    const hash = await utils.hash(data['passwordNew']);
    await User.findOneAndUpdate(
      {[userUniquePropName]: data[userUniquePropName] },
      { password: hash }, { new: true }
    );

    return;
  };

  return {
    register,
    changePassword,
  };
};      
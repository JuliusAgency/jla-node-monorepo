import crypto from 'node:crypto';
import { UserMngrOPtions } from './types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setupUserMngrService = (options: UserMngrOPtions) => {
  const { User, Token, utils } = options;

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


  const changePassword = async (
    email: string,
    password: string,
    passwordNew: string,
  ) => {
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) throw new Error("the user doesn't exists!");

    // Check credentials
    if (!(await utils.compare(password, user.password))) {
      throw new Error('Something wrong with credentials');
    }

    // Change password
    const hash = await utils.hash(passwordNew);
    await User.findOneAndUpdate({ email }, { password: hash }, { new: true });

    const changeParams = {
      email: user.email,
      name: user.name,
    };
    return changeParams;
  };

  const resetPasswordRequest = async (email: string) => {
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) throw new Error("the user doesn't exists");
    const pkn = User.getPrimaryKeyName();
    const resetToken = await createAndStoreResetPasswordToken(user[pkn]);

    const resetRequestParams = {
      name: String(user?.name),
      email: String(user?.email),
      token: resetToken,
      id: user[pkn],
    };
    return resetRequestParams;
  };

  const createAndStoreResetPasswordToken = async (id: number) => {
    // create new reset token
    const token = await Token.findOne({ user: id });
    if (token) await Token.deleteOne(token);
    const resetPasswordToken = crypto.randomBytes(32).toString('hex');
    const hash = await utils.hash(resetPasswordToken);

    // save the token
    await Token.save({
      user: id,
      token: hash,
      // expiresSec: 300,
      createdAt: new Date(),
    });
    return resetPasswordToken;
  };

  const resetPassword = async (id: string, token: string, password: string) => {
    const passwordResetToken = await validateResetToken(id, token);
    const hash = await utils.hash(password);
    const pkn = User.getPrimaryKeyName();
    await User.findOneAndUpdate(
      { [pkn]: id },
      { password: hash },
      { new: true },
    );

    await Token.deleteOne(passwordResetToken);
    const user = await User.findById({ [pkn]: id });
    const resetParams = {
      email: String(user?.email),
      name: String(user?.name),
    };
    return resetParams;
  };

  const validateResetToken = async (id: string, token: string) => {
    const passwordResetToken = await Token.findOne({ user: id });
    if (!passwordResetToken) {
      throw new Error('Invalid or expired password reset token');
    }
    const isValid = await utils.compare(token, passwordResetToken.token);
    if (!isValid) {
      throw new Error('Invalid or expired password reset token');
    }
    const dateNow = Date.now();
    const tokenDate = passwordResetToken.createdAt.getTime();
    const expired = dateNow - tokenDate > passwordResetToken.expiresSec * 1000;
    if (expired) {
      throw new Error('Invalid or expired password reset token');
    }
    return passwordResetToken;
  };

  return {
    register,
    changePassword,
    resetPasswordRequest,
    resetPassword,
  };
};

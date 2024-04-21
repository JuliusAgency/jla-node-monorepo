import bcrypt from 'bcrypt';

export type CryptUtilsOptions = {
  salt: number;
};

export const cryptUtils = (options: CryptUtilsOptions) => {
  const hash = async (password: string) => {
    return await bcrypt.hash(password, options.salt);
  };

  const compare = async (password: string, hashedPassword: string) => {
    return await bcrypt.compare(password, hashedPassword);
  };
  return { hash, compare };
};

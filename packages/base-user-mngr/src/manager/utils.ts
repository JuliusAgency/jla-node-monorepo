import bcrypt from 'bcrypt';

export const cryptUtils = () => {

  const hash = async (password: string, salt: number) => {
    return await bcrypt.hash(password, salt);
  };

  const compare = async (password: string, hashedPassword: string) => {
    return await bcrypt.compare(password, hashedPassword);
  };
  return { hash, compare };
};

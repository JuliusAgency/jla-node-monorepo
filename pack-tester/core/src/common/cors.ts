import cors from 'cors';

export const setupCors = () => {
  return cors({
    credentials: true,
    origin: true,
  });
};

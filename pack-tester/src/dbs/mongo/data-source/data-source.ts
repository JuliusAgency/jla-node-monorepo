import mongoose from 'mongoose';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const initDb = (config: any) => {
  console.log(config);
  const connectDb = async () => {
    // The `EventListeners` is setup here.
    mongoose.connection
      .on('error', (err) => {
        console.error(err);
      })
      .on('connected', () => {
        console.log('connected to mongodb');
      });

    // The actual connection to the database happens here.
    await mongoose.connect(config.dbUrl, {
      dbName: config.dbName,
    });
    return mongoose.connection;
  };
  return { connectDb };
};

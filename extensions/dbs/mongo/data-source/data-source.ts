import mongoose from 'mongoose';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const initDb = async (config: any) => {  
  let connection = undefined;
  const connectDb = async () => {
    if (connection != undefined) { 
      return connection;
    }
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
    connection = mongoose.connection;
    return connection;
  };
  return await connectDb();
};

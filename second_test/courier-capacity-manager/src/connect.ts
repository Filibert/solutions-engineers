import mongoose from "mongoose";

type ConnectionInput = {
  uri: string;
  pass?: string;
  user?: string;
};
export default ({ uri, pass, user }: ConnectionInput) => {
  const connect = () => {
    mongoose
      .connect(uri, { user, pass })
      .then(() => {
        return console.info(`Successfully connected to ${db}`);
      })
      .catch((error) => {
        console.error("Error connecting to database: ", error);
        return process.exit(1);
      });
  };
  connect();

  mongoose.connection.on("disconnected", connect);
};

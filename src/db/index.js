import mongooge from "mongoose";
import { DB_NAME } from "../constants.js";
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB cannected !! db host:${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGODB CANNECTION ERROR", error);
    process.exit(1);
  }
};
export default connectDB;

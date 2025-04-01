import mongoose from "mongoose";
import { DB_NAME } from "../utils/constants.js";

const connectDb = async () => {
  try {
    const connectionString = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log("mongodb connected");
  } catch (error) {
    console.log("ERROR:", error);
    process.exit(1);
  }
};
export default connectDb;

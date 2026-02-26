import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    return mongoose.connection;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
    return mongoose.connection;
  } catch (error) {
    console.error("Database connection failed:", error.message);
    throw error;
  }
};

export default connectDB;

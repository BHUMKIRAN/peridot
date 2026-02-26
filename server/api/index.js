import dotenv from "dotenv";
import app from "../app.js";
import connectDB from "../config/db.js";

dotenv.config();

let isConnected = false;

export default async function handler(req, res) {
  try {
    if (!isConnected) {
      await connectDB();
      isConnected = true;
    }

    return app(req, res);
  } catch (error) {
    console.error("API error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

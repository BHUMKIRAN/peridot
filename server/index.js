import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.js"; 
import queryRoutes from "./routes/userQuery.js"
import pmsRoutes from "./routes/pms.js"

connectDB();
dotenv.config();

const app = express();
const port = process.env.PORT
app.use(cors());
app.use(express.json());

app.use("/", authRoutes)
app.use("/" , queryRoutes) 
app.use("/" , pmsRoutes)


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

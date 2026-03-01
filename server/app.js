import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import queryRoutes from "./routes/userQuery.js";
import pmsRoutes from "./routes/pms.js";
import userRoute from "./routes/user.js";
import connectDB from "./config/db.js";

dotenv.config();
connectDB()
const app = express();
const corsOrigin = process.env.CORS_ORIGIN || "http://localhost:3000";

app.use(
  cors({
    origin: corsOrigin,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    credentials: true,
  })
);
app.use(express.json());

app.get("/health", (_req, res) => {
  res.status(200).json({ ok: true });
});

app.use("/", authRoutes);
app.use("/", queryRoutes);
app.use("/", pmsRoutes);
app.use("/", userRoute );

app.listen(process.env.PORT || 8080 , ()=>{
  console.log(`Server running on port ${process.env.PORT || 8080}`);
})

export default app;

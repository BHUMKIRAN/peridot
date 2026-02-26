import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import queryRoutes from "./routes/userQuery.js";
import pmsRoutes from "./routes/pms.js";

dotenv.config();

const app = express();
const corsOrigin = process.env.CORS_ORIGIN || "http://localhost:3000";

app.use(
  cors({
    origin: corsOrigin,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  })
);
app.use(express.json());

app.get("/health", (_req, res) => {
  res.status(200).json({ ok: true });
});

app.use("/", authRoutes);
app.use("/", queryRoutes);
app.use("/", pmsRoutes);

export default app;

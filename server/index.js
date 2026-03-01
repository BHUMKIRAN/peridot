import dotenv from "dotenv";
import http from "http";
import { Server } from "socket.io";
import connectDB from "./config/db.js";
import app from "./app.js";


dotenv.config();

const port = process.env.PORT || 8080;
const corsOrigin = process.env.CORS_ORIGIN || "http://localhost:3000";
let io;

const startServer = async () => {
  await connectDB();
  const server = http.createServer(app);

  io = new Server(server, {
    cors: {
      origin: corsOrigin,
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log(`New connection: ${socket.id}`);

    socket.on("send_message", (data) => {
      socket.broadcast.emit("receive_message", data);
    });

    socket.on("disconnect", () => {
      console.log("User disconnected");
    });
  });

  server.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
};

startServer().catch((error) => {
  console.error("Failed to start server:", error);
  process.exit(1);
});

export { io };

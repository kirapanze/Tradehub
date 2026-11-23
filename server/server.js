import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

// Load values from server/.env into process.env.
dotenv.config();

// Create our web server application.
const app = express();
app.use(cors({ origin: process.env.CLIENT_ORIGIN }));
app.use(express.json());

// A GET endpoint is a function activated by a browser request.
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    database: mongoose.connection.readyState === 1 ? "connected" : "disconnected"
  });
});

async function start() {
  try {
    // await pauses this async function until connection succeeds or fails.
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database connected");
    app.listen(Number(process.env.PORT), () => console.log("API running on port 5000"));
  } catch (error) {
    console.error("Startup failed:", error.message);
    process.exit(1);
  }
}
start();
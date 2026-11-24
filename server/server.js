
import Product from "./models/product.js";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

// Load environment variables from server/.env
dotenv.config();

// Create the Express application
const app = express();

// MIDDLEWARE: must come BEFORE the API routes
app.use(cors({
  origin: process.env.CLIENT_ORIGIN
}));

app.use(express.json());

// GET: Retrieve active products
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find({
      active: true
    });

    res.json(products);

  } catch (error) {
    console.error(
      "Product query failed:",
      error.message
    );

    res.status(500).json({
      error: "Could not load products"
    });
  }
});

// GET: Check whether the backend is healthy
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    database:
      mongoose.connection.readyState === 1
        ? "connected"
        : "disconnected"
  });
});

// Start the backend server
async function start() {
  try {
    await mongoose.connect(
      process.env.MONGODB_URI
    );

    console.log("Database connected");

    const PORT = Number(process.env.PORT) || 5000;

    app.listen(PORT, () => {
      console.log(`API running on port ${PORT}`);
    });

  } catch (error) {
    console.error("Startup failed:", error.message);
    process.exit(1);
  }
}

start();

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mockRoutes from "./routes/mock.js";

dotenv.config();

const app = express();

// Enable CORS for any origin (change "*" to your frontend URL if needed)
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// Middleware to parse JSON requests
app.use(express.json());

// Root route (for Render health check)
app.get("/", (req, res) => {
  res.send(" Backend is running jaydeep Das");
});

// Mock routes (Phase 1)
app.use("/api/mock", mockRoutes);

// Later: Autodesk API routes
// import apsRoutes from "./routes/aps.js";
// app.use("/api/aps", apsRoutes);

// Dynamic port for Render, fallback to 3001 locally
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Backend running on port ${PORT}`);
});

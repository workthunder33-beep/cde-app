import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import mockRoutes from "./routes/mock.js";   // ✅ your mock router
import apsRoutes from "./routes/aps.js";     // ✅ APS router (future)

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/mock", mockRoutes);  // Mock API
app.use("/api/aps", apsRoutes);    // APS API (later)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

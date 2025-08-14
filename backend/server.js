import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mockRoutes from "./routes/mock.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Mock routes (Phase 1)
app.use("/api/mock", mockRoutes);

// Later: Autodesk API routes
// import apsRoutes from "./routes/aps.js";
// app.use("/api/aps", apsRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Backend running at http://localhost:${PORT}`));

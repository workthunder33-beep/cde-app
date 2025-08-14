import { Router } from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const router = Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper: load mock data from frontend folder
function loadJSON(fileName) {
  const p = path.join(__dirname, "../../frontend/src/mock", fileName);
  const raw = fs.readFileSync(p);
  return JSON.parse(raw);
}

router.get("/folders", (req, res) => {
  res.json(loadJSON("folders.json"));
});

router.get("/metadata/:fileId", (req, res) => {
  const metadata = loadJSON("metadata.json");
  res.json(metadata[req.params.fileId] || {});
});

export default router;

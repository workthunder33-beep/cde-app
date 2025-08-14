const API_BASE = "http://localhost:3001/api/mock";

export async function getFolders() {
  const res = await fetch(`${API_BASE}/folders`);
  return res.json();
}

export async function getMetadata(fileId) {
  const res = await fetch(`${API_BASE}/metadata/${fileId}`);
  return res.json();
}

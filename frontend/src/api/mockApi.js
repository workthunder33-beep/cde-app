// const API_BASE = "https://cde-app-2.onrender.com";

// export async function getFolders() {
//   const res = await fetch(`${API_BASE}/folders`);
//   return res.json();
// }

// export async function getMetadata(fileId) {
//   const res = await fetch(`${API_BASE}/metadata/${fileId}`);
//   return res.json();
// }


const API_BASE = "https://cde-app-2.onrender.com/api/mock";

export async function getFolders() {
  const res = await fetch(`${API_BASE}/folders`);
  if (!res.ok) throw new Error("Failed to fetch folders");
  return res.json();
}

export async function getMetadata(fileId) {
  const res = await fetch(`${API_BASE}/metadata/${fileId}`);
  if (!res.ok) throw new Error("Failed to fetch metadata");
  return res.json();
}

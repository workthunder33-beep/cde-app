import React from "react";
import FileBrowser from "./components/FileBrowser";

export default function App() {
  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial' }}>
      <h2 style={{ padding: '1rem' }}>TRIAL APP</h2>
      <FileBrowser />
    </div>
  );
}

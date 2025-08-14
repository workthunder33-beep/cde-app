import React, { useEffect, useState } from "react";
import { getFolders, getMetadata } from "../api/mockApi";

function Tree({ nodes, onFileClick }) {
  return (
    <ul style={{ listStyle: 'none', paddingLeft: '0.5rem' }}>
      {nodes.map(node => (
        <li key={node.id} style={{ marginBottom: '0.25rem' }}>
          {node.type === 'folder' ? (
            <details open>
              <summary style={{ fontWeight: 600 }}>{node.name}</summary>
              <Tree nodes={node.children || []} onFileClick={onFileClick} />
            </details>
          ) : (
            <span
              onClick={() => onFileClick(node)}
              style={{ cursor: 'pointer', textDecoration: 'underline' }}
              title={`Open ${node.name}`}
            >
              {node.name} (v{node.version})
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}

export default function FileBrowser() {
  const [folders, setFolders] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [metadata, setMetadata] = useState(null);

  useEffect(() => {
    getFolders().then(setFolders);
  }, []);

  async function handleFileClick(file) {
    setSelectedFile(file);
    const meta = await getMetadata(file.id);
    setMetadata(meta);
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', height: '80vh', gap: '1rem', padding: '1rem' }}>
      <div style={{ border: '1px solid #ddd', borderRadius: 12, padding: '1rem', overflow: 'auto' }}>
        <h3 style={{ marginTop: 0 }}>Folders</h3>
        <Tree nodes={folders} onFileClick={handleFileClick} />
      </div>

      <div style={{ border: '1px solid #ddd', borderRadius: 12, padding: '1rem', overflow: 'auto' }}>
        {selectedFile ? (
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ marginTop: 0 }}>{selectedFile.name}</h3>
              <span style={{ opacity: 0.7 }}>v{selectedFile.version}</span>
            </div>

            <section>
              <h4>Metadata</h4>
              <pre style={{ background: '#f7f7f7', padding: '0.75rem', borderRadius: 8 }}>{JSON.stringify(metadata, null, 2)}</pre>
            </section>

            <section>
              <h4>Viewer (Placeholder)</h4>
              <div style={{ height: 360, background: '#f0f0f0', borderRadius: 8, display: 'grid', placeItems: 'center' }}>
                <div style={{ textAlign: 'center' }}>
                  <div>APS Viewer Placeholder</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>URN: {selectedFile.urn}</div>
                </div>
              </div>
            </section>
          </>
        ) : (
          <div style={{ display: 'grid', placeItems: 'center', height: '100%', opacity: 0.7 }}>
            <p>Select a file to see details.</p>
          </div>
        )}
      </div>
    </div>
  );
}

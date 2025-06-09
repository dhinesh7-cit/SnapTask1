
import React, { useState, useEffect } from 'react';
import { useAppContext } from '../context/AppContext';

export default function Upload() {
  const { user } = useAppContext();

  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setPreviewURL(URL.createObjectURL(file)); // 📌 Preview image
  };

  useEffect(() => {
    return () => {
      if (previewURL) URL.revokeObjectURL(previewURL); // 📌 Cleanup preview URL
    };
  }, [previewURL]);

  const handleUpload = async () => {
    if (!selectedFile) return;
    setIsUploading(true);

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const res = await fetch('http://localhost:8000/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      console.log('Upload success:', data);
    } catch (error) {
      console.error('Upload failed:', error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div>
      <h2>Upload Task Image</h2>
      {user && <p>Welcome, {user.name}</p>}
      <input type="file" onChange={handleFileChange} />
      {previewURL && <img src={previewURL} alt="Preview" style={{ width: 200 }} />}
      <button onClick={handleUpload} disabled={isUploading}>
        {isUploading ? 'Uploading...' : 'Upload'}
      </button>
    </div>
  );
}

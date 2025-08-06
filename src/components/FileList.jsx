// src/components/FileList.jsx
import React, { useState, useEffect } from 'react';

const FileList = ({ onFileSelect }) => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadFiles = async () => {
      try {
        // En entornos de desarrollo, necesitamos importar los archivos de forma dinámica
        // Para producción, podrías usar una API o leer del servidor
        const dataContext = require.context('../data', false, /\.json$/);
        const fileNames = dataContext.keys().map(key => key.replace('./', ''));
        setFiles(fileNames);
        setLoading(false);
      } catch (err) {
        setError('Error al cargar los archivos');
        setLoading(false);
      }
    };

    loadFiles();
  }, []);

  if (loading) {
    return <div className="file-list">Cargando archivos...</div>;
  }

  if (error) {
    return <div className="file-list error">{error}</div>;
  }

  return (
    <div className="file-list">
      <h3>Proyectos Disponibles</h3>
      <ul className="file-list-items">
        {files.map((file, index) => (
          <li key={index} className="file-item" onClick={() => onFileSelect(file)}>
            <span className="file-icon">📄</span>
            <span className="file-name">{file}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileList;
import './App.css';
import { POINT_TYPES } from './utils/pointTypes';
import FileList from './components/FileList';
import { useState } from 'react';

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [showLegend, setShowLegend] = useState(false);

  const handleFileSelect = (fileName) => {
    setSelectedFile(fileName);
    console.log('Archivo seleccionado:', fileName);
  };

  const toggleLegend = () => {
    setShowLegend(!showLegend);
  };

  const closeLegend = () => {
    setShowLegend(false);
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>Bikepacking Planner</h1>
      </header>
      
      <div className="main-layout">
        <div className="content-area">
          <h2>Planificador de Rutas</h2>
          {selectedFile ? (
            <p>Archivo seleccionado: <strong>{selectedFile}</strong></p>
          ) : (
            <p>Selecciona un proyecto de la lista para comenzar</p>
          )}
        </div>
        
        <div className="file-list-container">
          <FileList onFileSelect={handleFileSelect} />
        </div>
      </div>
      
      {/* Botón flotante para mostrar la leyenda */}
      <button 
        className="legend-button"
        onClick={toggleLegend}
        title="Mostrar leyenda de tipos de puntos"
        aria-label="Mostrar leyenda"
      >
        ℹ️
      </button>
      
      {/* Ventana flotante de leyenda */}
      {showLegend && (
        <div className="legend-modal-overlay open" onClick={closeLegend}>
          <div className="legend-modal" onClick={(e) => e.stopPropagation()}>
            <div className="legend-modal-header">
              <h2 className="legend-modal-title">Leyenda de Tipos de Puntos</h2>
              <button className="legend-modal-close" onClick={closeLegend}>
                ×
              </button>
            </div>
            <div className="legend-modal-content">
              <div className="legend-grid-modal">
                {Object.entries(POINT_TYPES).map(([key, value]) => (
                  <div key={key} className="legend-item-modal">
                    <span className="point-type-badge">
                      <span>{value.icon}</span>
                      <span>{key}</span>
                    </span>
                    <span>{value.description}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
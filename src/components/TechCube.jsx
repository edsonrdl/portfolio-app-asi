import React from 'react';
import '../styles/TechCube.css';

const TechCube = () => {
  // Lista de logomarcas reais: Java = openjdk por licença. AWS = amazon / aws.
  const devIcons = [
    "openjdk", "spring", "aws", "angular", "react", "docker", 
    "kubernetes", "apachekafka", "postgresql", "terraform", "rabbitmq", "redis"
  ];

  const getFaceCells = (offset) => {
    return Array.from({ length: 9 }).map((_, i) => {
      // Pega o termo respectivo da logo
      const iconSlug = devIcons[(offset + i) % devIcons.length];
      
      return (
        <div key={i} className="cube-cell" title={iconSlug}>
          <img 
            src={`https://cdn.simpleicons.org/${iconSlug}/f45f90`} 
            alt={iconSlug} 
            className="cube-tech-icon" 
          />
        </div>
      );
    });
  };

  return (
    <div className="cube-container">
      <div className="cube">
        <div className="cube-face front">{getFaceCells(0)}</div>
        <div className="cube-face back">{getFaceCells(2)}</div>
        <div className="cube-face right">{getFaceCells(4)}</div>
        <div className="cube-face left">{getFaceCells(6)}</div>
        <div className="cube-face top">{getFaceCells(8)}</div>
        <div className="cube-face bottom">{getFaceCells(10)}</div>
      </div>
    </div>
  );
};

export default TechCube;

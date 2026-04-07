import React from 'react';
import '../styles/TechCube.css';

const TechCube = () => {
  /**
   * Slugs extraídos do seu currículo e validados para cdn.simpleicons.org
   * AWS = amazonaws
   * Java = openjdk
   * Kubernetes = kubernetes
   * Terraform = terraform
   */
  const devIcons = [
    "openjdk",      // Java 8/17/21 (Fadesp/Itaú/Máxima)
    "spring",       // Spring Boot / Framework
    //"awsservices",    // Cloud AWS (Lambda, SQS, SNS, Glue)
    "angular",      // Angular Moderno (14/18)
    "terraform",    // IaC (Itaú)
    "docker",       // Containers (Harbor/Rancher)
    "kubernetes",   // Orquestração (OpenShift)
    "apachekafka",  // Mensageria (MSK / Kafka Connect)
    "postgresql",   // Persistence (Relacional)
    "mongodb",      // DocumentDB / NoSQL
    "rabbitmq",     // Mensageria Assíncrona
    "redis"         // Caching (Freelancer/Performance)
  ];

  const getFaceCells = (offset) => {
    return Array.from({ length: 9 }).map((_, i) => {
      const iconSlug = devIcons[(offset + i) % devIcons.length];
      
      return (
        <div key={i} className="cube-cell" title={iconSlug}>
          <img 
            /* Dica técnica: O sufixo /f45f90 define a cor. 
               Se quiser a cor original de cada marca, remova o /f45f90 
            */
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
        {/* Offsets calculados para distribuir a senioridade da stack nas faces */}
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
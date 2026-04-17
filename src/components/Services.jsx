import React from 'react';
import { consultingServices } from '../data/portfolioData';

const Services = () => {
  return (
    <section id="services" className="section-container">
      <h2 className="section-title">
         Serviços <span>Especializados (B2B)</span>
      </h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '40px', fontSize: '1.2rem', maxWidth: '800px' }}>
        Para atender desde startups a grandes corporações, os serviços são empacotados focando em resolver dores latentes do ciclo de vida do software.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
        {consultingServices.map((service, idx) => (
          <div key={idx} className="glass-card" style={{ padding: '30px', display: 'flex', flexDirection: 'column', gap: '15px', borderTop: '3px solid var(--primary)' }}>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--text-light)', marginBottom: '10px' }}>{service.title}</h3>
            
            <p style={{ color: 'var(--text-dark)', fontSize: '0.95rem' }}>
              <strong>O Cenário:</strong> {service.description}
            </p>
            
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              <strong>{service.execution.split(':')[0]}:</strong>{service.execution.split(':')[1]}
            </p>

            {service.outcome && (
              <div style={{ marginTop: 'auto', paddingTop: '15px', borderTop: '1px solid var(--border-color)' }}>
                <p style={{ color: 'var(--primary)', fontSize: '0.9rem' }}>
                  <strong>{service.outcome.split(':')[0]}:</strong>{service.outcome.split(':')[1]}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

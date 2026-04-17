import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Services from './components/Services';
import Contact from './components/Contact';
import TechCube from './components/TechCube';

import './index.css';
import './styles/components.css';

function App() {
  return (
    <div className="App">
      <Header />
      <TechCube />
      <main style={{ marginTop: '30px' }}>
        <Hero />
        <Portfolio />
        <About />
        <Experience />
        <Services />
        <Contact />
      </main>
      
      <footer style={{ padding: '40px 24px', textAlign: 'center', borderTop: '1px solid var(--border-color)', marginTop: '50px' }}>
        <img src={import.meta.env.BASE_URL + 'assets/asi-logo.svg'} alt="Asi Code Logo" style={{ width: '50px', marginBottom: '20px' }} />
        <p style={{ color: 'var(--text-muted)' }}>&copy; 2026 Edson Lopes - Asi. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;

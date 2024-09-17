// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import About from './about/About';
import Services from './services/Services';
import Portfolio from './portfolio/Portfolio';
import Contact from './contact/Contact';
import Header from './header/Header';
import Footer from './footer/Footer';
import './App.css'; // Import the CSS file

function App() {
  return (
    <Router>
      <div className="app-container">
      {/* <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}> */}
        <Header />
        <main>
        {/* <main style={{ flex: 1 }}> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

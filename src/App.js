// src/App.js
import React from 'react';
import { HashRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import './styles/global.css';
import LandingPage from './pages/Landing';
import ThankYou from './pages/ThankYou';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/home" element={<Home />} />
        <Route path="/thank" element={<ThankYou />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

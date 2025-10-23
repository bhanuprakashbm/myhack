import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Tracks from './components/Tracks';
import PrizePool from './components/PrizePool';
import Sponsors from './components/Sponsors';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { initScrollAnimations, addScrollAnimationClasses } from './utils/scrollAnimations';

// Import page components
import SchedulePage from './pages/SchedulePage';
import TeamPage from './pages/TeamPage';
import RegisterPage from './pages/RegisterPage';

// Home page component
const HomePage = () => {
  useEffect(() => {
    // Initialize scroll animations after component mounts
    const timer = setTimeout(() => {
      addScrollAnimationClasses();
      initScrollAnimations();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatedBackground />
      <Hero />
      <About />
      <Tracks />
      <PrizePool />
      <Sponsors />
      <FAQ />
      <Contact />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

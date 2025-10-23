import React, { useEffect } from 'react';
import Register from '../components/Register';
import AnimatedBackground from '../components/AnimatedBackground';
import { initScrollAnimations, addScrollAnimationClasses } from '../utils/scrollAnimations';

const RegisterPage = () => {
  useEffect(() => {
    // Initialize scroll animations after component mounts
    const timer = setTimeout(() => {
      addScrollAnimationClasses();
      initScrollAnimations();
    }, 100);

    // Scroll to top when page loads
    window.scrollTo(0, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="register-page">
      <AnimatedBackground />
      <Register />
    </div>
  );
};

export default RegisterPage;

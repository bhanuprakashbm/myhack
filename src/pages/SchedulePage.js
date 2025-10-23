import React, { useEffect } from 'react';
import Timeline from '../components/Timeline';
import AnimatedBackground from '../components/AnimatedBackground';
import { initScrollAnimations, addScrollAnimationClasses } from '../utils/scrollAnimations';

const SchedulePage = () => {
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
    <div className="schedule-page">
      <AnimatedBackground />
      <Timeline />
    </div>
  );
};

export default SchedulePage;

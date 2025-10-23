import React from 'react';
import './Tracks.css';

const Tracks = () => {
  const tracks = [
    {
      id: 1,
      title: 'EDUCATION',
      icon: '📚',
      description: 'Build innovative solutions for learning and educational technology',
      technologies: ['React', 'Node.js', 'AI/ML', 'Mobile Apps']
    },
    {
      id: 2,
      title: 'HEALTHCARE',
      icon: '🏥',
      description: 'Create impactful healthcare and medical technology solutions',
      technologies: ['IoT', 'Data Analytics', 'Mobile Health', 'Telemedicine']
    },
    {
      id: 3,
      title: 'GEO-VISUALIZATION',
      icon: '🗺️',
      description: 'Develop mapping and geographical data visualization tools',
      technologies: ['GIS', 'Maps API', 'Data Viz', 'Geospatial']
    },
    {
      id: 4,
      title: 'COMPUTER VISION',
      icon: '👁️',
      description: 'Build intelligent systems using image and video processing',
      technologies: ['OpenCV', 'TensorFlow', 'Deep Learning', 'Image Processing']
    },
    {
      id: 5,
      title: 'AI & MACHINE LEARNING',
      icon: '🤖',
      description: 'Create intelligent solutions using artificial intelligence',
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'NLP']
    },
    {
      id: 6,
      title: 'OPEN INNOVATION',
      icon: '💡',
      description: 'Build anything innovative - no restrictions on technology or domain',
      technologies: ['Any Stack', 'Creative Solutions', 'Innovation', 'Your Choice']
    }
  ];

  return (
    <section id="tracks" className="tracks">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Problem Statements</span>
          <h2 className="section-title">
            <span className="gradient-text">Proposed</span>
            <br />
            <span className="gradient-text">Tracks</span>
          </h2>
          <p className="section-description">
            Choose from our diverse range of tracks and build innovative solutions
            that can make a real impact in the world.
          </p>
        </div>

        <div className="tracks-grid">
          {tracks.map((track, index) => (
            <div key={track.id} className="track-card" data-index={index}>
              <div className="track-icon">
                <span className="icon-symbol">{track.icon}</span>
              </div>
              <h3 className="track-title">{track.title}</h3>
              <p className="track-description">{track.description}</p>
              <div className="track-technologies">
                {track.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <button className="track-btn">Know More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tracks;

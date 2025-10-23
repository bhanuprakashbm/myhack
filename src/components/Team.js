import React from 'react';
import './Team.css';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'John Doe',
      role: 'Event Coordinator',
      image: '/images/team/img1.jpg',
      linkedin: 'https://linkedin.com/in/johndoe',
      isHighlighted: false
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'Technical Lead',
      image: '/images/team/img2.jpg',
      linkedin: 'https://linkedin.com/in/janesmith',
      isHighlighted: false
    },
    {
      id: 3,
      name: 'Mike Johnson',
      role: 'Marketing Head',
      image: '/images/team/img3.jpg',
      linkedin: 'https://linkedin.com/in/mikejohnson',
      isHighlighted: false
    },
    {
      id: 4,
      name: 'Sarah Wilson',
      role: 'Design Lead',
      image: '/images/team/img4.jpg',
      linkedin: 'https://linkedin.com/in/sarahwilson',
      isHighlighted: false
    },
    {
      id: 5,
      name: 'Alex Brown',
      role: 'Operations Manager',
      image: '/images/team/img5.jpg',
      linkedin: 'https://linkedin.com/in/alexbrown',
      isHighlighted: false
    },
    {
      id: 6,
      name: 'Emily Davis',
      role: 'Community Manager',
      image: '/images/team/img6.jpg',
      linkedin: 'https://linkedin.com/in/emilydavis',
      isHighlighted: false
    }
  ];

  return (
    <section id="team" className="team-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="colorful-gradient-text">Team</span>
          </h2>
          <h3 className="team-subtitle">Executive Team</h3>
        </div>

        <div className="team-grid">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className={`team-card ${member.isHighlighted ? 'highlighted' : ''}`}
            >
              <div className="team-image-container">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="team-image"
                />
                <div className="image-border"></div>
              </div>
              
              <div className="team-info">
                <h4 className="team-name">{member.name}</h4>
                <p className="team-role">{member.role}</p>
              </div>

              <a 
                href={member.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="linkedin-link"
              >
                <div className="linkedin-icon">
                  <span>in</span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

import React from 'react';
import './Sponsors.css';

const Sponsors = () => {
  const sponsorTiers = {
    platinum: [
      {
        name: 'Orkes',
        logo: 'ORKES',
        description: 'Workflow Orchestration Platform'
      },
      {
        name: 'MX Master Series',
        logo: 'MX',
        subtitle: 'The Master Series by Logitech',
        description: 'Premium Productivity Solutions'
      }
    ],
    gold: [
      {
        name: 'Devfolio',
        logo: 'Devfolio',
        description: 'Developer Portfolio Platform'
      },
      {
        name: 'GitHub',
        logo: 'GitHub',
        description: 'Code Collaboration Platform'
      }
    ],
    silver: [
      {
        name: 'Polygon',
        logo: 'polygon',
        description: 'Ethereum Scaling Solutions'
      },
      {
        name: 'ETHIndia',
        logo: 'ETHIndia',
        description: 'Ethereum Developer Community'
      },
      {
        name: 'Aptos',
        logo: 'APTOS',
        description: 'Next-Gen Blockchain Platform'
      },
      {
        name: 'CodeCrafters',
        logo: 'CodeCrafters.io',
        description: 'Advanced Programming Challenges'
      }
    ]
  };

  return (
    <section id="sponsors" className="sponsors">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Our Partners</span>
          <h2 className="section-title">
            <span className="gradient-text">Sponsors</span>
          </h2>
          <p className="section-description">
            We're proud to partner with leading companies and organizations 
            who share our vision of fostering innovation and creativity.
          </p>
        </div>

        <div className="sponsors-content">
          {/* Platinum Sponsors */}
          <div className="sponsor-tier">
            <h3 className="tier-title">PLATINUM</h3>
            <div className="sponsor-grid platinum-grid">
              {sponsorTiers.platinum.map((sponsor, index) => (
                <div key={index} className="sponsor-card platinum-card">
                  <div className="sponsor-logo">
                    <span className="logo-text">{sponsor.logo}</span>
                    {sponsor.subtitle && (
                      <span className="logo-subtitle">{sponsor.subtitle}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gold Sponsors */}
          <div className="sponsor-tier">
            <h3 className="tier-title">GOLD</h3>
            <div className="sponsor-grid gold-grid">
              {sponsorTiers.gold.map((sponsor, index) => (
                <div key={index} className="sponsor-card gold-card">
                  <div className="sponsor-logo">
                    <span className="logo-text">{sponsor.logo}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Silver Sponsors */}
          <div className="sponsor-tier">
            <h3 className="tier-title">SILVER</h3>
            <div className="sponsor-grid silver-grid">
              {sponsorTiers.silver.map((sponsor, index) => (
                <div key={index} className="sponsor-card silver-card">
                  <div className="sponsor-logo">
                    <span className="logo-text">{sponsor.logo}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="become-sponsor">
          <h3 className="become-sponsor-title">Become a Sponsor</h3>
          <p className="become-sponsor-text">
            Join us in empowering the next generation of innovators and developers.
          </p>
          <button className="sponsor-cta-btn">Get Sponsorship Deck</button>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;

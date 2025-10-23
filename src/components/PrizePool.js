import React from 'react';
import './PrizePool.css';

const PrizePool = () => {
  return (
    <section id="prizes" className="prize-pool">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="pool-text">Pool</span>
            <span className="price-text">Price</span>
          </h2>
          <div className="prize-amount">
            <span className="amount-text">1 LAKH</span>
            <span className="currency-text">RUPEES</span>
          </div>
          <p className="section-description">
            Exciting prizes and rewards await the winners of our hackathon.
            Compete for cash prizes, internships, and exclusive opportunities.
          </p>
        </div>

        <div className="prize-breakdown">
          <div className="prize-item">
            <div className="prize-position">1st</div>
            <div className="prize-value">₹50,000</div>
            <div className="prize-extras">+ Internships + Certificates</div>
          </div>
          <div className="prize-item">
            <div className="prize-position">2nd</div>
            <div className="prize-value">₹30,000</div>
            <div className="prize-extras">+ Mentorship + Certificates</div>
          </div>
          <div className="prize-item">
            <div className="prize-position">3rd</div>
            <div className="prize-value">₹20,000</div>
            <div className="prize-extras">+ Certificates + Swag</div>
          </div>
        </div>

        <div className="additional-prizes">
          <h3 className="additional-title">Special Category Prizes</h3>
          <div className="special-prizes">
            <div className="special-prize">
              <span className="special-name">Best Innovation</span>
              <span className="special-amount">₹15,000</span>
            </div>
            <div className="special-prize">
              <span className="special-name">Best Freshers Team</span>
              <span className="special-amount">₹10,000</span>
            </div>
            <div className="special-prize">
              <span className="special-name">Best All-Girls Team</span>
              <span className="special-amount">₹10,000</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrizePool;

import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    year: '',
    team: '',
    experience: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <section id="register" className="register-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="colorful-gradient-text">Register</span>
          </h2>
        </div>

        <div className="register-container">
          <form onSubmit={handleSubmit} className="register-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="college">College/University</label>
              <input
                type="text"
                id="college"
                name="college"
                value={formData.college}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="year">Year of Study</label>
              <select
                id="year"
                name="year"
                value={formData.year}
                onChange={handleChange}
                required
              >
                <option value="">Select Year</option>
                <option value="1st">1st Year</option>
                <option value="2nd">2nd Year</option>
                <option value="3rd">3rd Year</option>
                <option value="4th">4th Year</option>
                <option value="graduate">Graduate</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="team">Team Name (Optional)</label>
              <input
                type="text"
                id="team"
                name="team"
                value={formData.team}
                onChange={handleChange}
                placeholder="Leave blank if registering individually"
              />
            </div>

            <div className="form-group">
              <label htmlFor="experience">Programming Experience</label>
              <select
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                required
              >
                <option value="">Select Experience Level</option>
                <option value="beginner">Beginner (0-1 years)</option>
                <option value="intermediate">Intermediate (1-3 years)</option>
                <option value="advanced">Advanced (3+ years)</option>
              </select>
            </div>

            <button type="submit" className="submit-btn">
              Register Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;

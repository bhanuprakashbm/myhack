import React from 'react';
import './Timeline.css';

const Timeline = () => {
  const scheduleData = {
    day1: [
      {
        time: "8:30 am - 9:45 am",
        title: "Registration & Check-in",
        description: "Onboarding of participants - Document Verification and ID card distribution"
      },
      {
        time: "9:45 am - 10:30 am",
        title: "Opening Ceremony",
        description: "Inauguration Ceremony / Hackathon Briefing / Problem Statement"
      },
      {
        time: "10:30 am - 11:00 am",
        title: "Break",
        description: "Networking and refreshments"
      },
      {
        time: "11:00 am - 11:30 pm",
        title: "Mentor Interaction",
        description: "Interaction with Track mentors"
      },
      {
        time: "11:30 pm - 1:00 pm",
        title: "Hacking Begins",
        description: "Working on problem statement"
      },
      {
        time: "1:00 pm - 2:00 pm",
        title: "Lunch Break",
        description: "Lunch and networking session"
      },
      {
        time: "2:00 pm - 3:30 pm",
        title: "Workshop",
        description: "Basics of API with Postman"
      },
      {
        time: "3:30 pm - 4:45 pm",
        title: "Development Time",
        description: "Work on Problem Statement (Resume)"
      },
      {
        time: "4:45 pm - 5:30 pm",
        title: "Fun Activity",
        description: "Fun Activity and snacks"
      },
      {
        time: "5:30 pm - 7:30 pm",
        title: "First Submission",
        description: "Work on Problem Statement and first submission"
      },
      {
        time: "7:30 pm - 9:00 pm",
        title: "Dinner",
        description: "Dinner break"
      },
      {
        time: "9:00 pm - 12:00 am",
        title: "Night Coding",
        description: "Work on Problem Statement (Resume)"
      }
    ],
    day2: [
      {
        time: "12:00 am - 7:00 am",
        title: "Sleep or Work",
        description: "Sleep or continue working"
      },
      {
        time: "7:00 am - 8:30 am",
        title: "Breakfast",
        description: "Morning breakfast"
      },
      {
        time: "8:30 am - 9:00 am",
        title: "Leaderboard Update",
        description: "Leaderboard Score Release"
      },
      {
        time: "9:00 am - 10:00 am",
        title: "Mentor Guidance",
        description: "Mentor Guidance Session"
      },
      {
        time: "10:30 am - 1:00 pm",
        title: "Final Development",
        description: "Work on Problem Statement (Resume)"
      },
      {
        time: "1:00 pm - 2:00 pm",
        title: "Lunch",
        description: "Lunch break"
      },
      {
        time: "2:00 pm - 3:00 pm",
        title: "Final Touches",
        description: "Work on Problem Statement (Resume)"
      },
      {
        time: "3:00 pm - 5:30 pm",
        title: "Presentations",
        description: "Final Presentation and Networking Session"
      },
      {
        time: "5:30 pm - 6:00 pm",
        title: "Break",
        description: "Break and Snacks"
      },
      {
        time: "6:00 pm - 7:00 pm",
        title: "Results & Closing",
        description: "Result Finalization and Announcement"
      }
    ]
  };

  return (
    <section id="timeline" className="timeline-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="colorful-gradient-text">Schedule</span>
          </h2>
          <p className="registration-info">Registration Closing at March 10, 2025</p>
        </div>

        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          {/* Day 1 */}
          <div className="day-section">
            <div className="day-header">
              <h3 className="day-title">Day 1</h3>
            </div>
            
            {scheduleData.day1.map((event, index) => (
              <div key={`day1-${index}`} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-marker"></div>
                <div className="timeline-card">
                  <div className="timeline-time">{event.time}</div>
                  <h4 className="timeline-title">{event.title}</h4>
                  <p className="timeline-description">{event.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Day 2 */}
          <div className="day-section">
            <div className="day-header">
              <h3 className="day-title">Day 2</h3>
            </div>
            
            {scheduleData.day2.map((event, index) => (
              <div key={`day2-${index}`} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-marker"></div>
                <div className="timeline-card">
                  <div className="timeline-time">{event.time}</div>
                  <h4 className="timeline-title">{event.title}</h4>
                  <p className="timeline-description">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;

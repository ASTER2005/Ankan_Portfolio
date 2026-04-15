import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="page-container animate-fade-in">
      <h2 className="section-title">About Me</h2>
      
      <div className="about-content glass-panel">
        <p className="bio">
          Motivated aspiring <span className="highlight">AI/ML Engineer</span> skilled in Python, Data Science, Machine Learning, and Deep Learning. Passionate about building intelligent, data-driven solutions for real-time threat detection and security. A quick learner with strong problem-solving abilities, leadership qualities, time management skills, and a steadfast commitment to continuous learning and innovation.
        </p>
      </div>

      <div className="skills-education-grid">
        <div className="skills-section">
          <h3 className="sub-title">Skills & Expertise</h3>
          
          <div className="skill-category">
            <h4>Programming</h4>
            <div className="skill-chips">
              <span className="chip">Python</span>
              <span className="chip">C</span>
            </div>
          </div>

          <div className="skill-category">
            <h4>AI & Data</h4>
            <div className="skill-chips">
              <span className="chip">Machine Learning</span>
              <span className="chip">Deep Learning</span>
              <span className="chip">Data Science</span>
              <span className="chip">Artificial Intelligence</span>
            </div>
          </div>

          <div className="skill-category">
            <h4>Tools & Libraries</h4>
            <div className="skill-chips">
              <span className="chip">Python Libraries</span>
              <span className="chip">Power BI</span>
              <span className="chip">Advanced Excel</span>
              <span className="chip">MS PowerPoint</span>
            </div>
          </div>

          <div className="skill-category">
            <h4>Soft Skills</h4>
            <div className="skill-chips">
              <span className="chip">Management</span>
              <span className="chip">Leadership</span>
              <span className="chip">Problem Solving</span>
              <span className="chip">Time Management</span>
            </div>
          </div>
        </div>

        <div className="education-section">
          <h3 className="sub-title">Education</h3>
          
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content glass-panel">
              <h4>B.Tech, Computer Science & Engineering (IOT)</h4>
              <h5>University Of Engineering & Management, Kolkata</h5>
              <span className="date">2024 &mdash; 2028</span>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content glass-panel">
              <h4>Senior Secondary (Class XII), CISCE</h4>
              <h5>Durgapur Public School</h5>
              <span className="date">2024</span>
              <p className="percentage">Score: 68.40%</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content glass-panel">
              <h4>Secondary (Class X), CISCE</h4>
              <h5>St. Michael's School</h5>
              <span className="date">2022</span>
              <p className="percentage">Score: 76.00%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

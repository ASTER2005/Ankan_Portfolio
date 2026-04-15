import React from 'react';
import './Experience.css'; // Let's reuse about.css logic or create a small experience.css

const Experience = () => {
  return (
    <div className="page-container animate-fade-in">
      <h2 className="section-title">Experience</h2>

      <div className="experience-timeline">
        
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content glass-panel">
            <div className="job-header">
              <div className="job-title-group">
                <h3>Cyber Security Intern</h3>
                <h4>University of Engineering and Management, Kolkata</h4>
              </div>
              <span className="date">May 2025 &mdash; July 2025</span>
            </div>
            
            <ul className="job-desc">
              <li>Developed a software system to detect and prevent cyber threats.</li>
              <li>Worked on real-world security problems and solutions to enhance local infrastructure resilience.</li>
            </ul>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content glass-panel">
            <div className="job-header">
              <div className="job-title-group">
                <h3>Innovation Project Leader</h3>
                <h4>Wadhwani Foundation</h4>
              </div>
              <span className="date">Jan 2025 &mdash; May 2025</span>
            </div>
            
            <ul className="job-desc">
              <li>Led a team to build an innovative technology project focusing on scalable solutions.</li>
              <li>Managed milestones, coordinated team efforts, and successfully delivered within constrained timelines.</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Experience;

import React from 'react';
import { Award, Code, Activity, BookOpen } from 'lucide-react';
import './Certifications.css';

const Certifications = () => {
  return (
    <div className="page-container animate-fade-in">
      <h2 className="section-title">Certifications & Extra Curriculars</h2>
      
      <div className="certifications-grid">
        <div className="cert-card glass-panel">
          <Award size={32} color="var(--neon-blue)" className="cert-icon" />
          <h3>Tech Quiz</h3>
          <h4>University Of Engineering And Management, Kolkata</h4>
          <span className="date">Mar 2025</span>
        </div>

        <div className="cert-card glass-panel">
          <BookOpen size={32} color="var(--neon-purple)" className="cert-icon" />
          <h3>ISRO Workshop</h3>
          <h4>RRSC ISRO, Kolkata</h4>
          <span className="date">Sep 2024 - Jan 2025</span>
        </div>
        
        <div className="cert-card glass-panel">
          <Activity size={32} color="var(--neon-blue)" className="cert-icon" />
          <h3>Internship - IEDC(CSE (IOT, CS, BT))</h3>
          <h4>University Of Engineering And Management</h4>
          <span className="date">May 2025 - Jun 2025</span>
        </div>
      </div>

      <h3 className="sub-title" style={{marginTop: '3rem'}}>Extra Curricular Activities</h3>
      <div className="extra-curricular-grid">
        <div className="activity-chip glass-panel">
          <Code size={20} color="var(--neon-blue)" />
          <span>Coding</span>
        </div>
        <div className="activity-chip glass-panel">
          <Activity size={20} color="var(--neon-purple)" />
          <span>Football</span>
        </div>
        <div className="activity-chip glass-panel">
          <Activity size={20} color="#00ffff" />
          <span>Swimming</span>
        </div>
      </div>
    </div>
  );
};

export default Certifications;

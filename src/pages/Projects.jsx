import React from 'react';
import { ExternalLink, Activity, LayoutTemplate } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Intelligent Threat Detection System",
      date: "May 2025 - Jul 2025",
      desc: "AI-based system for detecting and preventing cyber threats. Focused on anomaly detection and security automation in real-time environments.",
      tech: ["Python", "Machine Learning", "Data Science", "Cyber Security"],
      github: "https://github.com/ASTER2005",
      accuracy: "98.5%",
      metricsDesc: "F1-Score across threat datasets",
      hasArchitecture: false
    },
    {
      title: "Omni Voice",
      date: "Jan 2026 - Present",
      desc: "AI-based voice automation system featuring emotion detection and speaker authentication. Includes MultiDevice Connection capabilities for distributed access.",
      tech: ["Python", "Machine Learning", "Deep Learning", "Signal Processing"],
      github: "https://github.com/ASTER2005",
      accuracy: "96%",
      metricsDesc: "Speaker Authentication Accuracy",
      hasArchitecture: false
    },
    {
      title: "Pulse Oximeter using Arduino",
      date: "Apr 2025",
      desc: "Hardware-based health monitoring system utilizing Arduino Uno to measure and record vital blood oxygen levels.",
      tech: ["C", "Arduino", "IoT", "Sensors"],
      github: "https://github.com/ASTER2005",
      accuracy: "N/A",
      metricsDesc: "Hardware Implementation",
      hasArchitecture: false
    }
  ];

  return (
    <div className="page-container animate-fade-in">
      <h2 className="section-title">Projects</h2>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card glass-panel" key={index}>
            <div className="project-header">
              <h3>{project.title}</h3>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer" title="View Source">
                  <FaGithub size={20} />
                </a>
                <a href={project.github} target="_blank" rel="noreferrer" title="Live Demo Placeholder">
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
            
            <p className="project-date">{project.date}</p>
            <p className="project-desc">{project.desc}</p>
            
            <div className="project-tech">
              {project.tech.map((t, i) => (
                <span key={i} className="tech-chip">{t}</span>
              ))}
            </div>

            {/* Added details requested by user: Accuracy & Architecture Placeholders */}
            <div className="project-metrics">
              {project.accuracy !== "N/A" && (
                <div className="metric-box glass-panel">
                  <Activity size={18} color="var(--neon-blue)" />
                  <div>
                    <span className="metric-val text-gradient">{project.accuracy}</span>
                    <span className="metric-label">{project.metricsDesc}</span>
                  </div>
                </div>
              )}
              
              {project.hasArchitecture && (
                project.image ? (
                  <div className="architecture-image-container glass-panel">
                    <img src={project.image} alt={`${project.title} Architecture`} style={{ width: '100%', borderRadius: '8px' }} />
                  </div>
                ) : (
                  <div className="architecture-placeholder glass-panel">
                    <LayoutTemplate size={24} color="var(--neon-purple)" />
                    <span>Architecture Diagram Placeholder</span>
                    <small>(Import an image and add an 'image' property to this project)</small>
                  </div>
                )
              )}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

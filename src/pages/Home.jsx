import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="page-container hero-page">
      <div className="hero-content">
        <h2 className="greeting animate-fade-in delay-100">Hello, I'm</h2>
        <h1 className="name text-gradient animate-fade-in delay-200">ANKAN SARKAR</h1>
        <h4 className="title animate-fade-in delay-300">B.Tech CSE (IoT) Student at UEM Kolkata | Python | Aspiring AI Engineer | Cybersecurity & ML Enthusiast</h4>

        <p className="tagline animate-fade-in delay-300">
          "Building intelligent, data-driven systems for real-time threat detection and security"
        </p>

        <div className="hero-cta animate-fade-in delay-300">
          <NavLink to="/projects" className="btn btn-primary">
            View Projects <ArrowRight size={18} />
          </NavLink>
          <a href="/Ankan Sarkar_12024002034083_Resume.pdf" download className="btn btn-outline" target="_blank" rel="noreferrer">
            Download Resume <Download size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;

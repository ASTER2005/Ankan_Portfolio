import React from 'react';
import { NavLink } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar glass-panel">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-brand text-gradient">
          AS.
        </NavLink>
        
        <div className="navbar-links">
          <NavLink to="/" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>About</NavLink>
          <NavLink to="/experience" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Experience</NavLink>
          <NavLink to="/projects" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Projects</NavLink>
          <NavLink to="/certifications" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Certifications</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Contact</NavLink>
        </div>

        <div className="navbar-socials">
          <a href="https://github.com/ASTER2005" target="_blank" rel="noreferrer" title="GitHub"><FaGithub size={20} /></a>
          <a href="https://www.linkedin.com/in/ankan-sarkar-391005325/" target="_blank" rel="noreferrer" title="LinkedIn"><FaLinkedin size={20} /></a>
          <a href="mailto:ankan.sarkar2024@uem.edu.in" title="Email"><Mail size={20} /></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

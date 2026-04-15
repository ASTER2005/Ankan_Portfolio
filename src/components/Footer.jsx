import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer glass-panel">
      <div className="footer-content">
        <div className="footer-brand">
          <h2 className="text-gradient">ANKAN SARKAR</h2>
          <p>Building intelligent, data-driven systems for real-time threat detection and security.</p>
        </div>
        <div className="footer-contact">
          <h3>Contact</h3>
          <p><Phone size={16} /> +91 7679144582</p>
          <p><Mail size={16} /> ankan.sarkar2024@uem.edu.in</p>
        </div>
        <div className="footer-socials">
          <a href="https://github.com/ASTER2005" target="_blank" rel="noreferrer"><FaGithub size={20} /></a>
          <a href="https://www.linkedin.com/in/ankan-sarkar-391005325/" target="_blank" rel="noreferrer"><FaLinkedin size={20} /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Ankan Sarkar. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

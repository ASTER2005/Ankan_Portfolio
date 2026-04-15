import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <div className="page-container animate-fade-in">
      <h2 className="section-title">Get In Touch</h2>
      
      <div className="contact-grid">
        <div className="contact-info">
          <p className="contact-desc">
            I'm currently looking for new opportunities in the AI/ML and Cyber Security domain.
            Whether you have a question, a project idea, or just want to connect, feel free to reach out!
          </p>
          
          <div className="info-cards">
            <div className="info-card glass-panel">
              <Mail className="info-icon" color="var(--neon-blue)" />
              <div>
                <h4>Email</h4>
                <a href="mailto:ankan.sarkar2024@uem.edu.in">ankan.sarkar2024@uem.edu.in</a>
              </div>
            </div>
            
            <div className="info-card glass-panel">
              <Phone className="info-icon" color="var(--neon-purple)" />
              <div>
                <h4>Phone</h4>
                <a href="tel:+917679144582">+91 7679144582</a>
              </div>
            </div>
            
            <div className="info-card glass-panel">
              <MapPin className="info-icon" color="#00ffff" />
              <div>
                <h4>Location</h4>
                <span>Durgapur / Kolkata, India</span>
              </div>
            </div>
          </div>
          
          <div className="social-links-large">
            <a href="https://github.com/ASTER2005" target="_blank" rel="noreferrer" className="social-btn glass-panel">
              <FaGithub size={24} />
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/ankan-sarkar-391005325/" target="_blank" rel="noreferrer" className="social-btn glass-panel">
              <FaLinkedin size={24} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="contact-form glass-panel">
          <h3>Send a Message</h3>
          <form onSubmit={(e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const message = document.getElementById('message').value;
            window.location.href = `mailto:ankan.sarkar2024@uem.edu.in?subject=Portfolio Contact from ${name}&body=${encodeURIComponent(message)}`;
          }}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" required placeholder="John Doe" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" required placeholder="john@example.com" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" required rows="5" placeholder="Hello Ankan, I'd like to discuss..."></textarea>
            </div>
            <button type="submit" className="btn btn-primary" style={{width: '100%'}}>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

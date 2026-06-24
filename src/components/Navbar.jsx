import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Mail, Menu, X } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Certifications', path: '/certifications' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 sm:px-10 lg:px-12 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 glass-panel rounded-full relative">
        {/* Brand Logo */}
        <NavLink to="/" className="text-2xl font-heading font-extrabold tracking-tight text-gradient-primary">
          AS.
        </NavLink>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-base font-semibold transition-all duration-300 relative py-1.5 px-4 rounded-full hover:text-neon-blue ${
                  isActive ? 'text-neon-blue bg-white/5 shadow-inner' : 'text-gray-400 hover:text-white'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Socials / Actions (Desktop) */}
        <div className="hidden md:flex items-center gap-4 text-gray-400">
          <a
            href="https://github.com/ASTER2005"
            target="_blank"
            rel="noreferrer"
            className="hover:text-neon-blue transition-colors duration-300"
            title="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/ankan-sarkar-391005325/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-neon-blue transition-colors duration-300"
            title="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="mailto:ankan.sarkar2024@uem.edu.in"
            className="hover:text-neon-blue transition-colors duration-300"
            title="Email"
          >
            <Mail size={20} />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-300 hover:text-neon-blue transition-colors duration-300"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed top-24 left-6 right-6 p-6 glass-panel rounded-3xl flex flex-col gap-6 items-center shadow-2xl z-40"
          >
            <div className="flex flex-col gap-4 items-center w-full">
              {links.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-lg font-medium py-2 px-6 rounded-full w-full text-center transition-all duration-300 ${
                      isActive ? 'text-neon-blue bg-white/5 shadow-inner' : 'text-gray-300 hover:text-neon-blue'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Mobile Socials */}
            <div className="flex gap-6 text-gray-400 mt-2 border-t border-white/5 pt-4 w-full justify-center">
              <a
                href="https://github.com/ASTER2005"
                target="_blank"
                rel="noreferrer"
                className="hover:text-neon-blue transition-colors duration-300"
              >
                <FaGithub size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/ankan-sarkar-391005325/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-neon-blue transition-colors duration-300"
              >
                <FaLinkedin size={22} />
              </a>
              <a
                href="mailto:ankan.sarkar2024@uem.edu.in"
                className="hover:text-neon-blue transition-colors duration-300"
              >
                <Mail size={22} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { FaGithub as GithubIcon, FaLinkedin as LinkedinIcon } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 mb-8 relative z-10">
      <div className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-neon-purple/20 blur-3xl pointer-events-none rounded-full" />
        <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-neon-blue/10 blur-3xl pointer-events-none rounded-full" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-white/5 relative z-10">
          {/* Brand/Slogan */}
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-heading font-extrabold tracking-tight text-gradient-primary">
              ANKAN SARKAR
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Building intelligent solutions through AI, Machine Learning, and data-driven innovation.
            </p>
          </div>

          {/* Quick Contact info */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold tracking-wider text-gray-300 uppercase">Contact</h3>
            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <a href="tel:+917679144582" className="flex items-center gap-2 hover:text-neon-blue transition-colors duration-300">
                <Phone size={14} className="text-neon-blue" />
                <span>+91 7679144582</span>
              </a>
              <a href="mailto:ankan.sarkar2024@uem.edu.in" className="flex items-center gap-2 hover:text-neon-blue transition-colors duration-300">
                <Mail size={14} className="text-neon-purple" />
                <span className="truncate">ankan.sarkar2024@uem.edu.in</span>
              </a>
            </div>
          </div>

          {/* Socials Link Grid */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold tracking-wider text-gray-300 uppercase">Social Channels</h3>
            <div className="flex gap-4 text-gray-400">
              <a
                href="https://github.com/ASTER2005"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-white/5 hover:bg-white/10 hover:text-neon-blue border border-white/5 rounded-full transition-all duration-300 hover:-translate-y-1"
                title="GitHub"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/ankan-sarkar-391005325/"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-white/5 hover:bg-white/10 hover:text-neon-blue border border-white/5 rounded-full transition-all duration-300 hover:-translate-y-1"
                title="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 text-xs text-gray-500 gap-4 relative z-10">
          <span className="text-gray-400">B.Tech CSE (IoT) . Aspiring AI/ML Engineer. NLP</span>
          <p>&copy; 2026 Ankan Sarkar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

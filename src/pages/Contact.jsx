import React from 'react';
import { Mail, Phone, MapPin, Terminal } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 90, damping: 14 },
    },
  };

  const infoCards = [
    {
      title: "Email",
      val: "ankan.sarkar2024@uem.edu.in",
      href: "mailto:ankan.sarkar2024@uem.edu.in",
      icon: <Mail className="text-neon-blue" size={20} />,
      glowColor: "hover:border-neon-blue/30 shadow-neon-blue/5"
    },
    {
      title: "Phone",
      val: "+91 7679144582",
      href: "tel:+917679144582",
      icon: <Phone className="text-neon-purple" size={20} />,
      glowColor: "hover:border-neon-purple/30 shadow-neon-purple/5"
    },
    {
      title: "Location",
      val: "Durgapur / Kolkata, India",
      href: null,
      icon: <MapPin className="text-neon-pink" size={20} />,
      glowColor: "hover:border-neon-pink/30 shadow-neon-pink/5"
    }
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="page-container"
    >
      {/* Title */}
      <motion.div variants={itemVariants}>
        <h2 className="section-title">Get In Touch</h2>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Description & Cards */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-200 leading-relaxed font-sans"
          >
            I'm currently looking for new opportunities in the AI/ML and Cyber Security domain. Whether you have a question, a project idea, or just want to connect, feel free to reach out!
          </motion.p>
          
          <div className="flex flex-col gap-4">
            {infoCards.map((card, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className={`glass-panel p-6 md:p-8 rounded-2xl flex gap-4 items-center shadow-md transition-all duration-300 ${card.glowColor}`}
              >
                <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                  {card.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-gray-400 tracking-wider uppercase">{card.title}</span>
                  {card.href ? (
                    <a href={card.href} className="text-base font-semibold text-gray-200 hover:text-white transition-colors duration-200 mt-0.5 break-all">
                      {card.val}
                    </a>
                  ) : (
                    <span className="text-base font-semibold text-gray-200 mt-0.5">
                      {card.val}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Social buttons */}
          <div className="flex gap-4">
            <motion.a
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -2 }}
              href="https://github.com/ASTER2005"
              target="_blank"
              rel="noreferrer"
              className="flex-1 glass-panel py-3 rounded-2xl flex items-center justify-center gap-3 border border-white/5 hover:border-neon-blue/20 hover:text-neon-blue transition-all duration-300"
            >
              <FaGithub size={20} />
              <span className="text-base font-bold font-heading">GitHub</span>
            </motion.a>
            
            <motion.a
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -2 }}
              href="https://www.linkedin.com/in/ankan-sarkar-391005325/"
              target="_blank"
              rel="noreferrer"
              className="flex-1 glass-panel py-3 rounded-2xl flex items-center justify-center gap-3 border border-white/5 hover:border-neon-purple/20 hover:text-neon-purple transition-all duration-300"
            >
              <FaLinkedin size={20} />
              <span className="text-base font-bold font-heading">LinkedIn</span>
            </motion.a>
          </div>
        </div>

        {/* Right Column: Console/Terminal Contact Form */}
        <motion.div 
          variants={itemVariants}
          className="lg:col-span-7 bg-space-black/80 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative"
        >
          {/* Terminal Title Bar */}
          <div className="bg-white/5 border-b border-white/10 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            <span className="text-xs font-mono font-bold text-gray-400 flex items-center gap-1.5">
              <Terminal size={12} className="text-neon-blue" />
              contact_console.sh
            </span>
            <div className="w-14" /> {/* Spacer */}
          </div>
          
          {/* Terminal Body */}
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              const name = document.getElementById('name').value;
              const message = document.getElementById('message').value;
              window.location.href = `mailto:ankan.sarkar2024@uem.edu.in?subject=Portfolio Contact from ${name}&body=${encodeURIComponent(message)}`;
            }}
            className="p-8 md:p-10 flex flex-col gap-6 font-mono text-base"
          >
            <div className="text-neon-purple font-semibold">
              $ Initializing contact interface... success.
            </div>
            
            <div className="flex flex-col gap-2">
              <div className="text-gray-400">
                <span className="text-neon-blue">ankan@portfolio</span>:<span className="text-neon-pink">~</span>$ enter_name
              </div>
              <input 
                type="text" 
                id="name" 
                required 
                placeholder="e.g. John Doe"
                className="bg-white/5 border border-white/10 focus:border-neon-blue rounded-xl px-5 py-3 text-white font-sans placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-neon-blue/30 transition-all duration-300 w-full"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <div className="text-gray-400">
                <span className="text-neon-blue">ankan@portfolio</span>:<span className="text-neon-pink">~</span>$ enter_email
              </div>
              <input 
                type="email" 
                id="email" 
                required 
                placeholder="e.g. john@example.com"
                className="bg-white/5 border border-white/10 focus:border-neon-blue rounded-xl px-5 py-3 text-white font-sans placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-neon-blue/30 transition-all duration-300 w-full"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <div className="text-gray-400">
                <span className="text-neon-blue">ankan@portfolio</span>:<span className="text-neon-pink">~</span>$ write_message
              </div>
              <textarea 
                id="message" 
                required 
                rows="4" 
                placeholder="Hello Ankan, let's connect..."
                className="bg-white/5 border border-white/10 focus:border-neon-blue rounded-xl px-5 py-3 text-white font-sans placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-neon-blue/30 transition-all duration-300 resize-none w-full"
              />
            </div>
            
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit" 
              className="mt-2 bg-gradient-to-r from-neon-blue to-neon-purple text-white border border-white/5 rounded-xl px-6 py-4 font-heading font-bold cursor-pointer shadow-lg hover:shadow-neon-blue/20 transition-all duration-300 w-full flex items-center justify-center gap-2 text-lg"
            >
              <Terminal size={16} />
              <span>execute_send --now</span>
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;

import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import FloatingShape from '../components/FloatingShape';

const Home = () => {
  // Animation variants for children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center min-h-[70vh] py-8 relative"
    >
      {/* Background Decorative Glow (Local) */}
      <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-neon-blue/10 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-purple/10 blur-3xl pointer-events-none rounded-full" />

      {/* Left Column: Content Text */}
      <div className="lg:col-span-7 flex flex-col justify-center text-left gap-6 z-10">
        <motion.span 
          variants={itemVariants} 
          className="text-xl md:text-2xl font-heading font-semibold tracking-wide text-neon-blue uppercase"
        >
          Hello, I'm
        </motion.span>
        
        <motion.h1 
          variants={itemVariants}
          className="text-6xl md:text-7xl lg:text-8xl font-heading font-extrabold tracking-tight text-white leading-none"
        >
          ANKAN <span className="text-gradient-primary">SARKAR</span>
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className="text-xl md:text-2xl font-medium text-gray-300 max-w-2xl leading-relaxed font-sans"
        >
          B.Tech CSE (IoT) Student at UEM Kolkata <span className="text-neon-blue">|</span> Python Developer <span className="text-neon-purple">|</span> Aspiring AI Engineer <span className="text-neon-pink">|</span> Cybersecurity & ML Enthusiast
        </motion.p>
        
        <motion.p 
          variants={itemVariants}
          className="text-base md:text-lg text-gray-300 italic max-w-xl border-l-2 border-neon-blue pl-4 py-1"
        >
          "Building intelligent, data-driven systems for real-time threat detection and security"
        </motion.p>
        
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap gap-4 mt-4"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <NavLink to="/projects" className="btn-primary-glow inline-flex items-center gap-2 px-9 py-3.5 rounded-full text-white font-heading font-semibold text-lg">
              View Projects <ArrowRight size={18} />
            </NavLink>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a 
              href="/resume.pdf" 
              download 
              className="btn-outline-glow inline-flex items-center gap-2 px-9 py-3.5 rounded-full text-white font-heading font-semibold text-lg" 
              target="_blank" 
              rel="noreferrer"
            >
              Download Resume <Download size={18} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Right Column: 3D Canvas */}
      <motion.div 
        variants={itemVariants}
        className="lg:col-span-5 flex justify-center items-center relative z-10"
      >
        <div className="relative w-full max-w-[420px] aspect-square flex justify-center items-center">
          {/* Orbital rings decoration behind shape */}
          <div className="absolute inset-0 border border-white/5 rounded-full animate-[spin_40s_linear_infinite]" />
          <div className="absolute inset-8 border border-dashed border-neon-blue/10 rounded-full animate-[spin_25s_linear_infinite_reverse]" />
          <div className="absolute inset-16 border border-white/5 rounded-full animate-[spin_15s_linear_infinite]" />
          
          <FloatingShape />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;

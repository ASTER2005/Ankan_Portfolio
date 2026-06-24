import React from 'react';
import { Award, BookOpen, FileText, CheckCircle2, Flame, Compass, Code, Terminal, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Certifications = () => {
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

  const publication = {
    title: "Real-Time Threat Intelligence and Automated Prevention Using Micro Intelligent System Technology and Explainable Tree-Based Models",
    meta: "Published · 2026 · AI-Driven Cybersecurity",
    desc: "A peer-reviewed publication highlighting the implementation of end-to-end Machine Learning pipelines and Explainable AI (XAI) for real-time cybersecurity threat detection."
  };

  const achievements = [
    {
      title: "Finalist, Technologia Hackathon",
      desc: "Ranked among the top-performing teams nationally for developing an innovative technology solution under competitive time constraints."
    },
    {
      title: "Finalist, 4 Ideathons",
      desc: "Consistently advanced to final rounds across four ideation competitions, demonstrating cross-domain analytical thinking and solution design."
    },
    {
      title: "3rd Prize, Poster Presentation (x2)",
      desc: "Recognized twice for excellence in technical research visualization, communication clarity, and innovation in project demonstration."
    }
  ];

  const certifications = [
    {
      title: "Joy of Computing Using Python",
      issuer: "NPTEL · IIT Madras",
      icon: <Award size={28} className="text-neon-blue" />,
      glowColor: "hover:border-neon-blue/30 shadow-neon-blue/5"
    },
    {
      title: "Introduction to Machine Learning",
      issuer: "Microsoft",
      icon: <Award size={28} className="text-neon-purple" />,
      glowColor: "hover:border-neon-purple/30 shadow-neon-purple/5"
    },
    {
      title: "Introduction to Generative AI and Agents",
      issuer: "Microsoft",
      icon: <Award size={28} className="text-neon-pink" />,
      glowColor: "hover:border-neon-pink/30 shadow-neon-pink/5"
    }
  ];

  const technicalInterests = [
    { name: "Generative AI", icon: <Sparkles size={18} className="text-neon-blue" /> },
    { name: "MLOps", icon: <Terminal size={18} className="text-neon-purple" /> },
    { name: "Voice Biometrics", icon: <Flame size={18} className="text-neon-pink" /> },
    { name: "NLP", icon: <Code size={18} className="text-neon-blue" /> },
    { name: "Predictive Analytics", icon: <Compass size={18} className="text-neon-purple" /> },
    { name: "Edge AI", icon: <Sparkles size={18} className="text-neon-pink" /> }
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="page-container"
    >
      {/* Research Publication Section */}
      <div className="flex flex-col gap-6">
        <motion.div variants={itemVariants}>
          <h2 className="section-title">Research Publications</h2>
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.01 }}
          className="glass-panel p-8 md:p-10 rounded-3xl border border-white/5 hover:border-neon-blue/20 shadow-lg relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-neon-blue/5 blur-3xl pointer-events-none rounded-full" />
          <div className="flex gap-4 items-start">
            <div className="p-3 bg-neon-blue/10 border border-neon-blue/20 rounded-2xl flex items-center justify-center text-neon-blue">
              <FileText size={32} />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold text-neon-blue tracking-wider uppercase">{publication.meta}</span>
              <h3 className="text-xl md:text-2xl font-heading font-extrabold text-white leading-tight">
                {publication.title}
              </h3>
              <p className="text-base text-gray-400 font-medium font-sans leading-relaxed mt-2">
                {publication.desc}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Grid: Achievements & Certifications */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        
        {/* Left Column: Achievements */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-heading font-bold text-white mb-2">Key Achievements</h3>
          </motion.div>

          <div className="flex flex-col gap-4">
            {achievements.map((ach, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-panel p-6 md:p-8 border border-white/5 hover:border-neon-purple/20 flex gap-4 items-start shadow-md transition-all duration-300"
              >
                <div className="p-2 bg-neon-purple/10 border border-neon-purple/20 rounded-xl flex items-center justify-center text-neon-purple mt-0.5">
                  <CheckCircle2 size={18} />
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="text-lg font-heading font-extrabold text-white leading-tight">
                    {ach.title}
                  </h4>
                  <p className="text-sm text-gray-300 font-medium font-sans leading-relaxed">
                    {ach.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Certifications */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-heading font-bold text-white mb-2">Certifications</h3>
          </motion.div>

          <div className="flex flex-col gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                className={`glass-panel p-6 md:p-8 rounded-2xl flex gap-4 items-center shadow-md transition-all duration-300 ${cert.glowColor}`}
              >
                <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                  {cert.icon}
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-xs font-bold text-gray-500 tracking-wider uppercase">
                    {cert.issuer.split(' · ')[0]}
                  </span>
                  <h3 className="text-lg font-heading font-extrabold text-white leading-tight">
                    {cert.title}
                  </h3>
                  <h4 className="text-sm text-gray-300 font-medium font-sans">
                    {cert.issuer}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Technical Interests Section */}
      <div className="flex flex-col gap-6 mt-4">
        <motion.div variants={itemVariants}>
          <h3 className="text-3xl font-heading font-bold text-white">Technical Interests</h3>
        </motion.div>

        <div className="flex flex-wrap gap-4">
          {technicalInterests.map((interest, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.08, y: -2 }}
              className="glass-panel px-5 py-3 rounded-full flex items-center gap-3 border border-white/5 hover:border-white/15 cursor-default transition-all duration-300"
            >
              <div className="p-1 bg-white/5 rounded-full">
                {interest.icon}
              </div>
              <span className="text-base font-semibold text-gray-200 font-sans">
                {interest.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Certifications;

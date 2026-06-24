import React from 'react';
import { ExternalLink, Activity, LayoutTemplate } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Cyber Threat Detection & Prevention System",
      date: "May — Nov 2025",
      desc: "Fuses transformer-based NLP (DistilBERT) with gradient-boosted tree models (LightGBM, XGBoost, Random Forest) via weighted voting to classify spam, phishing, malware, botnet, DDoS, and brute-force attacks. Surpasses single-vector rules and features Explainable AI (XAI) for threat reasoning.",
      tech: ["Python", "Scikit-Learn", "PyTorch", "DistilBERT", "LightGBM", "XGBoost", "TF-IDF", "XAI", "Pandas", "NumPy", "Matplotlib"],
      github: "https://github.com/ASTER2005",
      accuracy: "98.23%",
      metricsDesc: "Ensemble Classification Accuracy",
      hasArchitecture: true,
      accent: "hover:shadow-[0_0_25px_rgba(0,240,255,0.15)] hover:border-neon-blue/40 border-white/5",
      iconColor: "text-neon-blue"
    },
    {
      title: "OmniVoice – Edge-Based Voice Authentication System",
      date: "May 2026 — Present",
      desc: "Architected a fully offline, privacy-preserving voice authentication pipeline using ResNet-18 + ArcFace for speaker verification. Features real-time Voice Activity Detection (VAD) and wake-word triggering, optimizing model inference latency by 99.7% via INT8 quantization and ONNX Runtime.",
      tech: ["Python", "PyTorch", "SpeechBrain", "Silero VAD", "DS-CNN", "ResNet-18", "ArcFace", "ONNX Runtime", "INT8 Quantization", "Librosa", "Torchaudio"],
      github: "https://github.com/ASTER2005/Omni-Voice",
      accuracy: "99.7%",
      metricsDesc: "ONNX Speedup & Inference Latency Reduction",
      hasArchitecture: true,
      accent: "hover:shadow-[0_0_25px_rgba(138,43,226,0.15)] hover:border-neon-purple/40 border-white/5",
      iconColor: "text-neon-purple"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.05 },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 80, damping: 14 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="page-container"
    >
      {/* Title */}
      <motion.div variants={cardVariants}>
        <h2 className="section-title">Projects</h2>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.02 }}
            className={`glass-panel p-8 rounded-3xl flex flex-col justify-between shadow-lg transition-all duration-300 ${project.accent}`}
          >
            <div>
              {/* Card Header */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-2xl font-heading font-extrabold text-white leading-snug tracking-tight">
                  {project.title}
                </h3>
                
                {/* External Links */}
                <div className="flex items-center gap-3 text-gray-400">
                  <motion.a
                    whileHover={{ scale: 1.1, color: '#ffffff' }}
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    title="View Source"
                    className="transition-colors duration-300"
                  >
                    <FaGithub size={20} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, color: '#ffffff' }}
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    title="Live Demo"
                    className="transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                </div>
              </div>

              {/* Date */}
              <span className="text-sm font-semibold text-gray-500 tracking-wider block mb-3 uppercase">
                {project.date}
              </span>

              {/* Desc */}
              <p className="text-base text-gray-300 leading-relaxed font-sans mb-5">
                {project.desc}
              </p>
              
              {/* Tech Chips */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-sm font-medium px-3 py-1.5 bg-white/5 border border-white/5 rounded-lg text-gray-300 font-sans"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Metrics & Diagrams Panel */}
            <div className="flex flex-col gap-4 mt-auto pt-4 border-t border-white/5">
              {project.accuracy !== "N/A" && (
                <div className="flex items-center gap-3 p-3 bg-white/[0.02] border border-white/5 rounded-xl">
                  <Activity size={18} className={`${project.iconColor} animate-pulse-slow`} />
                  <div className="flex flex-col">
                    <span className="text-lg font-heading font-bold text-gradient-primary leading-none">
                      {project.accuracy}
                    </span>
                    <span className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider mt-1">
                      {project.metricsDesc}
                    </span>
                  </div>
                </div>
              )}
              
              {project.hasArchitecture && (
                <div className="relative group/diag border border-dashed border-white/10 hover:border-neon-blue/30 bg-white/[0.01] hover:bg-neon-blue/[0.02] transition-all duration-300 p-4 rounded-xl flex flex-col items-center justify-center gap-2 overflow-hidden text-center min-h-[90px]">
                  {/* Visual Background grid lines inside box */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none" />
                  
                  <LayoutTemplate size={20} className="text-neon-blue group-hover/diag:animate-bounce" />
                  <span className="text-xs font-bold text-gray-300 tracking-tight z-10">Architecture Blueprint</span>
                  <span className="text-[10px] text-gray-500 font-medium z-10">(Click source to inspect detailed documentation)</span>
                </div>
              )}
            </div>

          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;

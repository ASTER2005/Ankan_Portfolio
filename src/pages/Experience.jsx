import React from 'react';
import { Shield, Users, Coins } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 90, damping: 14 },
    },
  };

  const experiences = [
    {
      title: "AI/ML Research Intern – Cybersecurity Division",
      company: "University of Engineering & Management (UEM), Kolkata",
      date: "May 2025 — Jul 2025",
      desc: [
        "Designed and deployed a multi-class AI threat detection system classifying spam, phishing, malware, botnet, DDoS, brute-force, and anomalous traffic with 98.23% overall accuracy.",
        "Built end-to-end ML pipeline encompassing data preprocessing, feature engineering, feature selection, and hyperparameter optimization across 6+ threat categories.",
        "Evaluated and benchmarked five ML algorithms — Random Forest, Extra Trees, LightGBM, Logistic Regression, and DistilBERT within a weighted voting ensemble framework.",
        "Integrated Explainable AI (XAI) to surface human-interpretable threat reasoning for security analysts and stakeholders.",
        "Authored IEEE-format research documentation, experimental analysis, and performance evaluation reports, contributing directly to a peer-reviewed publication in 2026."
      ],
      icon: <Shield className="text-neon-blue" size={20} />,
      badgeColor: "bg-neon-blue/10 border-neon-blue/20 text-neon-blue",
      glowColor: "hover:border-neon-blue/30 shadow-neon-blue/5"
    },
    {
      title: "Logistics Lead",
      company: "Microsoft Student Society, UEM Kolkata",
      date: "2025 — Present",
      desc: [
        "Led logistics and execution for multiple student-led technical events and workshops; coordinated cross-functional teams and managed participant operations end-to-end.",
        "Awarded Best Working Member by the society for exceptional leadership, communication, and organizational contributions."
      ],
      icon: <Users className="text-neon-purple" size={20} />,
      badgeColor: "bg-neon-purple/10 border-neon-purple/20 text-neon-purple",
      glowColor: "hover:border-neon-purple/30 shadow-neon-purple/5"
    },
    {
      title: "Treasurer & Sponsorship Volunteer",
      company: "FusioniX'26 – 24-Hour National-Level Hackathon",
      date: "2026",
      desc: [
        "Managed full-cycle financial operations including budgeting, expense tracking, and financial planning for a large-scale national hackathon.",
        "Drove corporate outreach to secure sponsorships from technology companies and startups; authored professional sponsorship proposals and partnership agreements."
      ],
      icon: <Coins className="text-neon-pink" size={20} />,
      badgeColor: "bg-neon-pink/10 border-neon-pink/20 text-neon-pink",
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
        <h2 className="section-title">Professional Experience</h2>
      </motion.div>

      {/* Timeline Section */}
      <div className="relative pl-10 border-l border-white/10 flex flex-col gap-12 w-full py-4">
        {/* Glow track line */}
        <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-gradient-to-b from-neon-blue via-neon-purple to-transparent pointer-events-none" />

        {experiences.map((job, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative"
          >
            {/* Timeline icon dot */}
            <div className="absolute -left-[54px] top-1.5 p-2.5 bg-space-black border border-white/10 rounded-full flex items-center justify-center shadow-lg z-10">
              <div className="p-0.5 bg-white/5 rounded-full">
                {job.icon}
              </div>
            </div>

            {/* Content card */}
            <div className={`glass-panel p-8 rounded-3xl flex flex-col gap-4 shadow-md transition-all duration-300 ${job.glowColor}`}>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-white/5 pb-3">
                <div className="flex flex-col gap-1">
                  <h3 className="text-2xl font-heading font-extrabold text-white leading-tight">
                    {job.title}
                  </h3>
                  <h4 className="text-base text-gray-300 font-medium font-sans">
                    {job.company}
                  </h4>
                </div>
                
                <span className={`text-sm font-semibold px-4 py-1 border rounded-full font-heading h-max w-max ${job.badgeColor}`}>
                  {job.date}
                </span>
              </div>

              {/* Job details */}
              <ul className="flex flex-col gap-2.5 pl-4 list-disc text-base text-gray-300 leading-relaxed font-sans">
                {job.desc.map((bullet, bIdx) => (
                  <li key={bIdx} className="hover:text-white transition-colors duration-200">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
